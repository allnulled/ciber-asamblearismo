module.exports = class {

    method = "use";
    
    route = "^/CreateUser$";

    priority = 5000;
    
    getMiddleware() {
        return [];
    }
    
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.CreateUser");
        try {
            const data = {
                request,
                response,
                next,
                parameters: {},
                success: {}
            };
            await this.formatParameters(data);
            await this.executeQuery(data);
            return this.api.Utilities.DispatchSuccess(response, data.success);
        } catch (error) {
            return this.api.Utilities.DispatchError(response, error);
        }
    }

    async formatParameters({ request, parameters }) {
        this.api.Utilities.Trace("api.Controllers.CreateUser.formatParameters");
        const nombre = this.api.Utilities.GetRequestParameter(request, "nombre");
        const contrasenya = this.api.Utilities.GetRequestParameter(request, "contrasenya");
        const correo = this.api.Utilities.GetRequestParameter(request, "correo");
        this.api.Utilities.CheckThat(nombre, "nombre").isString().and.hasLengthGreaterThan(0);
        this.api.Utilities.CheckThat(contrasenya, "contrasenya").isString().and.hasLengthGreaterThan(6);
        this.api.Utilities.CheckThat(correo, "correo").isString().and.hasLengthGreaterThan(5);
        parameters.nombre = nombre;
        parameters.contrasenya = contrasenya;
        parameters.correo = correo;
    }

    async executeQuery(data) {
        const { parameters, success } = data;
        this.api.Utilities.Trace("api.Controllers.CreateUser.executeQuery");
        const { Insert } = this.api.Utilities.QueryBuilder;
        const { nombre, contrasenya, correo } = parameters;
        const sql = Insert.create().table("Usuario").columns(["nombre", "contrasenya", "correo"]).values({ nombre, contrasenya, correo }).toString();
        const output = await this.api.Utilities.QueryDatabase(sql);
        const [{ last_id }] = await this.api.Utilities.QueryDatabase("SELECT LAST_INSERT_ROWID() AS last_id");
        success.id = last_id;
        success.output = output;
    }

};