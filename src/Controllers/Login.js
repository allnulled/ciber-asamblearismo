const sqlstring = require("sqlstring");
/**
 * @title Login
 * @type Class
 * @name Login
 * @file /src/Controllers/Login.js
 * @module yes
 */
module.exports = class {
    
    /**
     * @title Login.method
     * @type Class property
     * @name method
     * @file /src/Controllers/Login.js
     * @module no
     * @value "use" 
     * @description Defines the method by which `express` will mount the controller. Defaults to `"use"` but it is safer `"post"`.
     */
    method = "use";
    
    /**
     * @title Login.route
     * @type Class property
     * @name route
     * @file /src/Controllers/Login.js
     * @module no
     * @value "/Login" 
     * @description Defines the route by which `express` will mount the controller. Defaults to `"/Login"`.
     */
    route = "/Login";

    /**
     * @title Login.priority
     * @type Class property
     * @name priority
     * @file /src/Controllers/Login.js
     * @module no
     * @value 4000
     * @description Defines the priority by which `express` will mount the controller. Defaults to 4000.
     */
    priority = 4000;
    
    /**
     * @title Login.getMiddleware
     * @type Class method
     * @name getMiddleware
     * @file /src/Controllers/Login.js
     * @module no
     * @value a function that returns an empty array 
     * @description Returns the set of middlewares to be mounted before accessing the controller. Defaults to an empty array.
     */
    getMiddleware() {
        return [];
    }
    
    /**
     * @title Login.dispatch
     * @type Class method
     * @name dispatch
     * @file /src/Controllers/Login.js
     * @module no
     * @value a function 
     * @description Follows these steps:
     * 
     *    - gets `nombre` and `contrasenya` by the `request`
     *    - gets active session, if any
     *    - if so, it returns its token
     *    - if not, it creates a new active session
     *    - and returns its token
     * 
     */
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.Login");
        try {
            const { nombre, contrasenya } = this.getLoginParameters(request);
            const sesionActiva = await this.getActiveSession(nombre, contrasenya);
            if(sesionActiva !== false) {
                return this.api.Utilities.DispatchSuccess(response, {
                    sesion: { token: sesionActiva.token }
                });
            }
            const token = await this.createActiveSession(nombre, contrasenya);
            return this.api.Utilities.DispatchSuccess(response, {
                sesion: { token }
            });
        } catch (error) {
            return this.api.Utilities.DispatchError(response, error);
        }
    }

    getLoginParameters(request) {
        const nombre = this.api.Utilities.GetRequestParameter(request, "nombre", false);
        const contrasenya = this.api.Utilities.GetRequestParameter(request, "contrasenya", false);
        if(typeof nombre !== "string") {
            throw new Error("Se requiere parámetro «nombre» en controlador «Login»");
        }
        if(typeof contrasenya !== "string") {
            throw new Error("Se requiere parámetro «contrasenya» en controlador «Login»");
        }
        return { nombre, contrasenya };
    }

    async getActiveSession(nombre, contrasenya) {
        const usuario = await this.getUserByNameAndPassword(nombre, contrasenya);
        let sql = "";
        sql += "SELECT * FROM Sesion WHERE id_usuario = ";
        sql += sqlstring.escape(usuario.id);
        sql += ";";
        const sesionesActivas = await this.api.Utilities.QueryDatabase(sql);
        if(sesionesActivas.length) {
            return sesionesActivas[0];
        }
        return false;
    }

    async createActiveSession(nombre, contrasenya) {
        const usuario = await this.getUserByNameAndPassword(nombre, contrasenya);
        const nuevoToken = this.api.Utilities.GetRandomString(99);
        let sql = "";
        sql += "INSERT INTO Sesion (id_usuario, token) VALUES (";
        sql += sqlstring.escape(usuario.id);
        sql += ",";
        sql += sqlstring.escape(nuevoToken);
        sql += ");";
        await this.api.Utilities.QueryDatabase(sql);
        return nuevoToken;
    }

    async getUserByNameAndPassword(nombre, contrasenya) {
        let sql = "";
        sql += "SELECT * FROM Usuario WHERE nombre = ";
        sql += sqlstring.escape(nombre);
        sql += "\n AND contrasenya = ";
        sql += sqlstring.escape(contrasenya);
        sql += ";";
        const usuariosCoincidentes = await this.api.Utilities.QueryDatabase(sql);
        if(usuariosCoincidentes.length === 0) {
            throw new Error("No se encontró usuario coincidente con nombre «" + nombre + "» y la contraseña proporcionada");
        }
        return usuariosCoincidentes[0];
    }

};