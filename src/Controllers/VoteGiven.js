module.exports = class {

    method = "use";

    route = "^/VoteGiven$";

    priority = 5000;

    getMiddleware() {
        return [];
    }

    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.VoteGiven");
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
        this.api.Utilities.Trace("api.Controllers.VoteGiven.formatParameters");
        const { request, parameters } = data;
        const id_problema = this.api.Utilities.GetRequestParameter(request, "id_problema");
        const id_problema_clasificado = this.api.Utilities.GetRequestParameter(request, "id_problema_clasificado");
        const id_solucion = this.api.Utilities.GetRequestParameter(request, "id_solucion");
        const id_solucion_clasificada = this.api.Utilities.GetRequestParameter(request, "id_solucion_clasificada");
        const id_implementacion = this.api.Utilities.GetRequestParameter(request, "id_implementacion");
        const id_implementacion_clasificada = this.api.Utilities.GetRequestParameter(request, "id_implementacion_clasificada");
        const sentido = this.api.Utilities.GetRequestParameter(request, "sentido");
        if (id_problema) {
            parameters.es_voto_de_columna = "id_problema";
            parameters.es_voto_de_tabla = "Problema";
            parameters.id_objetivo = id_problema;
        } else if (id_problema_clasificado) {
            parameters.es_voto_de_columna = "id_problema_clasificado";
            parameters.es_voto_de_tabla = "Problema_clasificado";
            parameters.id_objetivo = id_problema_clasificado;
        } else if (id_solucion) {
            parameters.es_voto_de_columna = "id_solucion";
            parameters.es_voto_de_tabla = "Solucion";
            parameters.id_objetivo = id_solucion;
        } else if (id_solucion_clasificada) {
            parameters.es_voto_de_columna = "id_solucion_clasificada";
            parameters.es_voto_de_tabla = "Solucion_clasificada";
            parameters.id_objetivo = id_solucion_clasificada;
        } else if (id_implementacion) {
            parameters.es_voto_de_columna = "id_implementacion";
            parameters.es_voto_de_tabla = "Implementacion";
            parameters.id_objetivo = id_implementacion;
        } else if (id_implementacion_clasificada) {
            parameters.es_voto_de_columna = "id_implementacion_clasificada";
            parameters.es_voto_de_tabla = "Implementacion_clasificada";
            parameters.id_objetivo = id_implementacion_clasificada;
        } else {
            throw new Error("El voto debe aportar uno de los campos sobre el objetivo del voto: «id_problema», «id_problema_clasificado», «id_solucion», «id_solucion_clasificada», «id_implementacion», «id_implementacion_clasificada» en el controlador «VoteGiven»");
        }
        if(["positivo", "negativo"].indexOf(sentido) === -1) {
            throw new Error("El voto necesita un sentido «positivo» o «negativo» en el controlador «VoteGiven»");
        }
        parameters.sentido = sentido;
    }

    async validateParameters(data) {
        this.api.Utilities.Trace("api.Controllers.VoteGiven.validateParameters");
        const { parameters, success } = data;
        const { Select } = this.api.Utilities.QueryBuilder;
        const sql1 = Select.create().table(parameters.es_voto_de_tabla).where([["id", "=", parameters.id_objetivo]]).toString();
        const result1 = await this.api.Utilities.QueryDatabase(sql1);
        const [objetivo] = result1;
        const sql2 = Select.create().table("Votacion").where([["id", "=", objetivo.id_votacion]]).toString();
        const result2 = await this.api.Utilities.QueryDatabase(sql2);
        const [votacion] = result2;
        const estado_de_votacion = votacion.estado;
        let es_aceptado = false;
        if ((estado_de_votacion === "1. Presentation")) {
            throw new Error("La votación «" + votacion.id + "» de la instancia a votar de «" + parameters.es_voto_de_tabla + "» con id «" + parameters.id_objetivo + "» no admite votos de ningún tipo ahora mismo porque está en fase de «1. Presentación»");
        } else if (estado_de_votacion === "2. Problems/open") {
            if (parameters.es_voto_de_columna !== "id_problema") {
                throw new Error("La votación «" + votacion.id + "» de la instancia a votar de «" + parameters.es_voto_de_tabla + "» con id «" + parameters.id_objetivo + "» solo admite votos a «problemas» porque está en fase de «2. Problems/open»");
            } else {
                es_aceptado = true;
            }
        } else if (estado_de_votacion === "3. Problems/classification") {
            if (parameters.es_voto_de_columna !== "id_problema_clasificado") {
                throw new Error("La votación «" + votacion.id + "» de la instancia a votar de «" + parameters.es_voto_de_tabla + "» con id «" + parameters.id_objetivo + "» solo admite votos a «problemas_clasificados» porque está en fase de «3. Problems/clasification»");
            } else {
                es_aceptado = true;
            }
        } else if (estado_de_votacion === "4. Solutions/open") {
            if (parameters.es_voto_de_columna !== "id_solucion") {
                throw new Error("La votación «" + votacion.id + "» de la instancia a votar de «" + parameters.es_voto_de_tabla + "» con id «" + parameters.id_objetivo + "» solo admite votos a «soluciones» porque está en fase de «4. Soluciones/open");
            } else {
                es_aceptado = true;
            }
        } else if (estado_de_votacion === "5. Solutions/classification") {
            if (parameters.es_voto_de_columna !== "id_solucion_clasificada") {
                throw new Error("La votación «" + votacion.id + "» de la instancia a votar de «" + parameters.es_voto_de_tabla + "» con id «" + parameters.id_objetivo + "» solo admite votos a «soluciones_clasificadas» porque está en fase de «5. Soluciones/clasification»");
            } else {
                es_aceptado = true;
            }
        } else if (estado_de_votacion === "6. Implementations/open") {
            if (parameters.es_voto_de_columna !== "id_implementacion") {
                throw new Error("La votación «" + votacion.id + "» de la instancia a votar de «" + parameters.es_voto_de_tabla + "» con id «" + parameters.id_objetivo + "» solo admite votos a «implementaciones» porque está en fase de «6. Implementaciones/open»");
            } else {
                es_aceptado = true;
            }
        } else if (estado_de_votacion === "7. Implementations/classification") {
            if (parameters.es_voto_de_columna !== "id_implementacion_clasificada") {
                throw new Error("La votación «" + votacion.id + "» de la instancia a votar de «" + parameters.es_voto_de_tabla + "» con id «" + parameters.id_objetivo + "» solo admite votos a «implementaciones_clasificadas» porque está en fase de «7. Implementaciones/clasificadas»");
            } else {
                es_aceptado = true;
            }
        } else if (estado_de_votacion === "8. Changes/application") {
            throw new Error("La votación «" + votacion.id + "» de la instancia a votar de «" + parameters.es_voto_de_tabla + "» con id «" + parameters.id_objetivo + "» no admite votos de ningún tipo ahora mismo porque está en fase de «8. Changes/application»");
        } else if (estado_de_votacion === "9. Historical") {
            throw new Error("La votación «" + votacion.id + "» de la instancia a votar de «" + parameters.es_voto_de_tabla + "» con id «" + parameters.id_objetivo + "» no admite votos de ningún tipo ahora mismo porque está en fase de «9. Historical»");
        } else {
            throw new Error("La votación «" + votacion.id + "» está en un estado incongruente, puedes avisar al administrador de esta anomalía");
        }
        if(!es_aceptado) {
            throw new Error("La votación «" + votacion.id + "» está en un estado incongruente, puedes avisar al administrador de esta anomalía (esto no debería ocurrir)");
        }
        parameters.objetivo = objetivo;
        parameters.votacion = votacion;
    }

    async executeQuery(data) {
        this.api.Utilities.Trace("api.Controllers.VoteGiven.executeQuery");
        const { parameters, success } = data;
        const { Insert } = this.api.Utilities.QueryBuilder;
        const item = {
            [parameters.es_voto_de_columna]: parameters.id_objetivo,
            sentido: parameters.sentido
        };
        const sql = Insert.create().table("Voto").columns([parameters.es_voto_de_columna, "sentido"]).values(item).toString();
        const result = await this.api.Utilities.QueryDatabase(sql);
        const [{ last_id }] = await this.api.Utilities.QueryDatabase("SELECT LAST_INSERT_ROWID() AS last_id;");
        success.vote = item;
        success.vote.id = last_id;
        success.id = last_id;
    }

};