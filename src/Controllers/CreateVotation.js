module.exports = class {

    method = "use";
    
    route = "^/CreateVotation$";

    priority = 5000;
    
    getMiddleware() {
        return [];
    }
    
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.CreateVotation");
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

    async formatParameters({ parameters, request }) {
        this.api.Utilities.Trace("api.Controllers.CreateVotation.formatParameters");
        const presentacion = this.api.Utilities.GetRequestParameter(request, "presentacion");
        const fecha_de_fase_1_str = this.api.Utilities.GetRequestParameter(request, "fecha_de_fase_1");
        const fecha_de_fase_2_str = this.api.Utilities.GetRequestParameter(request, "fecha_de_fase_2");
        const fecha_de_fase_3_str = this.api.Utilities.GetRequestParameter(request, "fecha_de_fase_3");
        const fecha_de_fase_4_str = this.api.Utilities.GetRequestParameter(request, "fecha_de_fase_4");
        const fecha_de_fase_5_str = this.api.Utilities.GetRequestParameter(request, "fecha_de_fase_5");
        const fecha_de_fase_6_str = this.api.Utilities.GetRequestParameter(request, "fecha_de_fase_6");
        const fecha_de_fase_7_str = this.api.Utilities.GetRequestParameter(request, "fecha_de_fase_7");
        const fecha_de_fase_8_str = this.api.Utilities.GetRequestParameter(request, "fecha_de_fase_8");
        const fecha_de_fase_9_str = this.api.Utilities.GetRequestParameter(request, "fecha_de_fase_9");
        this.api.Utilities.CheckThat(presentacion, "presentacion").isString();
        this.api.Utilities.CheckThat(presentacion, "presentacion").hasLengthGreaterThan(0);
        this.api.Utilities.CheckThat(fecha_de_fase_1_str, "fecha_de_fase_1").isString();
        this.api.Utilities.CheckThat(fecha_de_fase_2_str, "fecha_de_fase_2").isString();
        this.api.Utilities.CheckThat(fecha_de_fase_3_str, "fecha_de_fase_3").isString();
        this.api.Utilities.CheckThat(fecha_de_fase_4_str, "fecha_de_fase_4").isString();
        this.api.Utilities.CheckThat(fecha_de_fase_5_str, "fecha_de_fase_5").isString();
        this.api.Utilities.CheckThat(fecha_de_fase_6_str, "fecha_de_fase_6").isString();
        this.api.Utilities.CheckThat(fecha_de_fase_7_str, "fecha_de_fase_7").isString();
        this.api.Utilities.CheckThat(fecha_de_fase_8_str, "fecha_de_fase_8").isString();
        const fecha_de_fase_1 = this.api.Utilities.GetDateFromString(fecha_de_fase_1_str);
        const fecha_de_fase_2 = this.api.Utilities.GetDateFromString(fecha_de_fase_2_str);
        const fecha_de_fase_3 = this.api.Utilities.GetDateFromString(fecha_de_fase_3_str);
        const fecha_de_fase_4 = this.api.Utilities.GetDateFromString(fecha_de_fase_4_str);
        const fecha_de_fase_5 = this.api.Utilities.GetDateFromString(fecha_de_fase_5_str);
        const fecha_de_fase_6 = this.api.Utilities.GetDateFromString(fecha_de_fase_6_str);
        const fecha_de_fase_7 = this.api.Utilities.GetDateFromString(fecha_de_fase_7_str);
        const fecha_de_fase_8 = this.api.Utilities.GetDateFromString(fecha_de_fase_8_str);
        const fecha_de_fase_9 = this.api.Utilities.GetDateFromString(fecha_de_fase_9_str);
        this.api.Utilities.CheckThat(fecha_de_fase_1, "fecha_de_fase_1").isDate();
        this.api.Utilities.CheckThat(fecha_de_fase_2, "fecha_de_fase_2").isDate();
        this.api.Utilities.CheckThat(fecha_de_fase_3, "fecha_de_fase_3").isDate();
        this.api.Utilities.CheckThat(fecha_de_fase_4, "fecha_de_fase_4").isDate();
        this.api.Utilities.CheckThat(fecha_de_fase_5, "fecha_de_fase_5").isDate();
        this.api.Utilities.CheckThat(fecha_de_fase_6, "fecha_de_fase_6").isDate();
        this.api.Utilities.CheckThat(fecha_de_fase_7, "fecha_de_fase_7").isDate();
        this.api.Utilities.CheckThat(fecha_de_fase_8, "fecha_de_fase_8").isDate();
        this.api.Utilities.CheckThat(fecha_de_fase_1, "fecha_de_fase_1").isLowerThan(fecha_de_fase_2, "fecha_de_fase_2");
        this.api.Utilities.CheckThat(fecha_de_fase_2, "fecha_de_fase_2").isLowerThan(fecha_de_fase_3, "fecha_de_fase_3");
        this.api.Utilities.CheckThat(fecha_de_fase_3, "fecha_de_fase_3").isLowerThan(fecha_de_fase_4, "fecha_de_fase_4");
        this.api.Utilities.CheckThat(fecha_de_fase_4, "fecha_de_fase_4").isLowerThan(fecha_de_fase_5, "fecha_de_fase_5");
        this.api.Utilities.CheckThat(fecha_de_fase_5, "fecha_de_fase_5").isLowerThan(fecha_de_fase_6, "fecha_de_fase_6");
        this.api.Utilities.CheckThat(fecha_de_fase_6, "fecha_de_fase_6").isLowerThan(fecha_de_fase_7, "fecha_de_fase_7");
        this.api.Utilities.CheckThat(fecha_de_fase_7, "fecha_de_fase_7").isLowerThan(fecha_de_fase_8, "fecha_de_fase_8");
        this.api.Utilities.CheckThat(fecha_de_fase_8, "fecha_de_fase_8").isLowerThan(fecha_de_fase_9, "fecha_de_fase_9");
        parameters.presentacion = presentacion;
        parameters.fecha_de_fase_1 = fecha_de_fase_1;
        parameters.fecha_de_fase_2 = fecha_de_fase_2;
        parameters.fecha_de_fase_3 = fecha_de_fase_3;
        parameters.fecha_de_fase_4 = fecha_de_fase_4;
        parameters.fecha_de_fase_5 = fecha_de_fase_5;
        parameters.fecha_de_fase_6 = fecha_de_fase_6;
        parameters.fecha_de_fase_7 = fecha_de_fase_7;
        parameters.fecha_de_fase_8 = fecha_de_fase_8;
        parameters.fecha_de_fase_9 = fecha_de_fase_9;
    }

    async executeQuery({ parameters, success }) {
        this.api.Utilities.Trace("api.Controllers.CreateVotation.executeQuery");
        const { Insert } = this.api.Utilities.QueryBuilder;
        let sql = Insert.create().table("Votacion").columns([
            "presentacion",
            "estado",
            "fecha_de_fase_1",
            "fecha_de_fase_2",
            "fecha_de_fase_3",
            "fecha_de_fase_4",
            "fecha_de_fase_5",
            "fecha_de_fase_6",
            "fecha_de_fase_7",
            "fecha_de_fase_8",
            "fecha_de_fase_9"
        ]).values({
            presentacion: parameters.presentacion,
            estado: "1. Presentation",
            fecha_de_fase_1: parameters.fecha_de_fase_1,
            fecha_de_fase_2: parameters.fecha_de_fase_2,
            fecha_de_fase_3: parameters.fecha_de_fase_3,
            fecha_de_fase_4: parameters.fecha_de_fase_4,
            fecha_de_fase_5: parameters.fecha_de_fase_5,
            fecha_de_fase_6: parameters.fecha_de_fase_6,
            fecha_de_fase_7: parameters.fecha_de_fase_7,
            fecha_de_fase_8: parameters.fecha_de_fase_8,
            fecha_de_fase_9: parameters.fecha_de_fase_9,
        }).toString();
        const resultado = await this.api.Utilities.QueryDatabase(sql);
        const [{ last_id }] = await this.api.Utilities.QueryDatabase("SELECT LAST_INSERT_ROWID() AS last_id;");
        parameters.last_id = last_id;
        success.id = last_id;
        success.output = [];
    }

};