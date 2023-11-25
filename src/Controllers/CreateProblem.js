module.exports = class {

    method = "use";
    
    route = "^/CreateProblem$";

    priority = 5000;
    
    getMiddleware() {
        return [];
    }
    
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.CreateProblem");
        try {
            const data = {
                request,
                response,
                next,
                parameters: {},
                success: {}
            };
            await this.formatParameters(data);
            await this.validateParameters(data);
            await this.executeQuery(data);
            return this.api.Utilities.DispatchSuccess(response, data.success);
        } catch (error) {
            return this.api.Utilities.DispatchError(response, error);
        }
    }

    async formatParameters(data) {
        this.api.Utilities.Trace("api.Controllers.CreateProblem.formatParameters");
        const { request, parameters } = data;
        const titulo = this.api.Utilities.GetRequestParameter(request, "titulo", false);
        const descripcion = this.api.Utilities.GetRequestParameter(request, "descripcion", false);
        const contenido = this.api.Utilities.GetRequestParameter(request, "contenido", false);
        const id_votacion = this.api.Utilities.GetRequestParameter(request, "id_votacion", false);
        this.api.Utilities.CheckThat(titulo).isString().and.hasLengthGreaterThan(0);
        this.api.Utilities.CheckThat(descripcion).isString().and.hasLengthGreaterThan(0);
        this.api.Utilities.CheckThat(contenido).isString().and.hasLengthGreaterThan(0);
        this.api.Utilities.CheckThat(id_votacion).isNumber().and.isGreaterThan(0);
        parameters.titulo = titulo;
        parameters.descripcion = descripcion;
        parameters.contenido = contenido;
        parameters.id_votacion = id_votacion;
    }

    async validateParameters(data) {
        this.api.Utilities.Trace("api.Controllers.CreateProblem.validateParameters");
        const { parameters } = data;
        const { Select } = this.api.Utilities.QueryBuilder;
        const sql = Select.create().table("Votacion").where([[ "id", "=", parameters.id_votacion ]]).toString();
        const result = await this.api.Utilities.QueryDatabase(sql);
        const [votacion] = result;
        if(typeof votacion === "undefined") {
            throw new Error("Se requiere parámetro «id_votacion» coincidir con una votación válida en el controlador «CreateProblem»");
        }
        const es_estado_valido_para_insercion_de_problema = votacion.estado === "2. Problems/open";
        if(!es_estado_valido_para_insercion_de_problema) {
            throw new Error("El estado de la votación seleccionada no admite problemas en este momento en el controlador «CreateProblem»");
        }
    }

    async executeQuery(data) {
        this.api.Utilities.Trace("api.Controllers.CreateProblem.executeQuery");
        const { parameters, success } = data;
        const { Insert } = this.api.Utilities.QueryBuilder;
        const sql = Insert.create().table("Problema").columns(["titulo", "descripcion", "contenido", "id_votacion"]).values({
            titulo: parameters.titulo,
            descripcion: parameters.descripcion,
            contenido: parameters.contenido,
            id_votacion: parameters.id_votacion,
        }).toString();
        await this.api.Utilities.QueryDatabase(sql);
        const [{ last_id }] = await this.api.Utilities.QueryDatabase("SELECT LAST_INSERT_ROWID() AS last_id;");
        success.id = last_id;
    }

};