/**
 * @type Class
 * @name ProgressVotation
 * @file /src/Controllers/ProgressVotation.js
 * @module yes
 */
module.exports = class {
    
    /**
     * @title ProgressVotation.method
     * @type Class property
     * @name method
     * @file /src/Controllers/ProgressVotation.js
     * @module no
     * @value "use" 
     * @description Defines the method by which `express` will mount the controller. Defaults to `"use"` but it is safer `"post"`.
     */
    method = "use";
    
    /**
     * @title ProgressVotation.route
     * @type Class property
     * @name route
     * @file /src/Controllers/ProgressVotation.js
     * @module no
     * @value "^/ProgressVotation$" 
     * @description Defines the route by which `express` will mount the controller. Set to "^/ProgressVotation$".
     */
    route = "^/ProgressVotation$";

    /**
     * @title ProgressVotation.priority
     * @type Class property
     * @name priority
     * @file /src/Controllers/ProgressVotation.js
     * @module no
     * @value "^/ProgressVotation$" 
     * @description Defines the priority by which `express` will mount the controller. Set to 5000.
     */
    priority = 5000;
    
    /**
     * @title ProgressVotation.getMiddleware
     * @type Class method
     * @name getMiddleware
     * @file /src/Controllers/ProgressVotation.js
     * @module no
     * @value a function
     * @description Defines the middlewares used by `express` while mounting the controller. This function by default returns an empty array.
     */
    getMiddleware() {
        return [];
    }

    /**
     * @title ProgressVotation.progressSteps
     * @type Class property
     * @name progressSteps
     * @file /src/Controllers/ProgressVotation.js
     * @module no
     * @value a function
     * @description Defines the steps followed by any votation. By default, it contains 9 elements:
     * 
     *    - "1. Presentation",
     *    - "2. Problems/open",
     *    - "3. Problems/classification",
     *    - "4. Solutions/open",
     *    - "5. Solutions/classification",
     *    - "6. Implementations/open",
     *    - "7. Implementations/classification",
     *    - "8. Changes/application",
     *    - "9. Historical"
     * 
     */
    progressSteps = [
        "1. Presentation",
        "2. Problems/open",
        "3. Problems/classification",
        "4. Solutions/open",
        "5. Solutions/classification",
        "6. Implementations/open",
        "7. Implementations/classification",
        "8. Changes/application",
        "9. Historical"
    ];
    
    /**
     * @title ProgressVotation.dispatch
     * @type Class method
     * @name dispatch
     * @file /src/Controllers/ProgressVotation.js
     * @module no
     * @value a function
     * @parameter `request` - an Object
     * @parameter `response` - an Object
     * @parameter `next` - a Function
     * @returns anything
     * @description Per order, follows these procedures:
     * 
     *   - prepares the `data`
     *   - calls `this.formatParameters(data)`
     *   - calls `this.validateParameters(data)`
     *   - calls `this.updateData(data)`
     *   - calls `this.executeQuery(data)`
     * 
     */
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.ProgressVotation");
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
            await this.updateData(data);
            await this.executeQuery(data);
            return this.api.Utilities.DispatchSuccess(response, data.success);
        } catch (error) {
            return this.api.Utilities.DispatchError(response, error);
        }
    }
    /**
     * @title ProgressVotation.formatParameters
     * @type Class method
     * @name formatParameters
     * @file /src/Controllers/ProgressVotation.js
     * @module no
     * @value a function
     * @async yes
     * @parameter `data` - an Object
     * @returns anything
     * @description Sets `data.parameters.id_votacion` from `request` and `id_votacion`.
     */
    async formatParameters(data) {
        this.api.Utilities.Trace("api.Controllers.ProgressVotation.formatParameters");
        const { request, parameters } = data;
        parameters.id_votacion = this.api.Utilities.GetRequestParameter(request, "id_votacion");
        this.api.Utilities.CheckThat(parameters.id_votacion, "id_votacion").isNumber().and.isGreaterThan(0);
    }
    /**
     * @title ProgressVotation.validateParameters
     * @type Class method
     * @name validateParameters
     * @file /src/Controllers/ProgressVotation.js
     * @module no
     * @value a function
     * @async yes
     * @parameter `data` - an Object
     * @returns anything
     * @description Follows these steps:
     * 
     *   - Queries database by `votacion` where `id` equals `data.parameters.id_votacion`.
     *   - Sets that votacion to `parameters.votacion`.
     * 
     */
    async validateParameters(data) {
        this.api.Utilities.Trace("api.Controllers.ProgressVotation.validateParameters");
        const { parameters } = data;
        const { Select } = this.api.Utilities.QueryBuilder;
        const sql = Select.create().table("Votacion").where([["id", "=", parameters.id_votacion]]).toString();
        const results = await this.api.Utilities.QueryDatabase(sql);
        const [votacion] = results;
        parameters.votacion = votacion;
    }

    /**
     * @title ProgressVotation.updateData
     * @type Class method
     * @name updateData
     * @file /src/Controllers/ProgressVotation.js
     * @module no
     * @value a function
     * @async yes
     * @parameter `data` - an Object
     * @returns anything
     * @description Follows these steps:
     * 
     *   - If `votacion.estado` equals "2. Problems/open" then it calls `this.migrateClassifiedProblems`.
     *   - If `votacion.estado` equals "4. Solutions/open" then it calls `this.migrateClassifiedSolutions`.
     *   - If `votacion.estado` equals "6. Implementations/open" then it calls `this.migrateClassifiedImplementations`.
     *   - If `votacion.estado` equals "8. Changes/application" then it calls `this.migrateChanges`.
     * 
     */
    async updateData(data) {
        this.api.Utilities.Trace("api.Controllers.ProgressVotation.executeQuery");
        const { parameters, success } = data;
        if(parameters.votacion.estado === "2. Problems/open") {
            await this.migrateClassifiedProblems();
        } else if(parameters.votacion.estado === "4. Solutions/open") {
            await this.migrateClassifiedSolutions();
        } else if(parameters.votacion.estado === "6. Implementations/open") {
            await this.migrateClassifiedImplementations();
        } else if(parameters.votacion.estado === "8. Changes/application") {
            await this.migrateChanges();
        }
    }

    async migrateClassifiedProblems() {
        this.api.Utilities.Trace("api.Controllers.ProgressVotation.migrateClassifiedProblems");

    }

    async migrateClassifiedSolutions() {
        this.api.Utilities.Trace("api.Controllers.ProgressVotation.migrateClassifiedSolutions");
        
    }

    async migrateClassifiedImplementations() {
        this.api.Utilities.Trace("api.Controllers.ProgressVotation.migrateClassifiedImplementations");
        
    }

    async migrateChanges() {
        this.api.Utilities.Trace("api.Controllers.ProgressVotation.migrateChanges");
        
    }

    async executeQuery(data) {
        this.api.Utilities.Trace("api.Controllers.ProgressVotation.executeQuery");
        const { parameters, success } = data;
        const old_state = parameters.votacion.estado;
        const old_state_position = this.progressSteps.indexOf(old_state);
        const new_state_position = old_state_position + 1;
        const new_state = this.progressSteps[new_state_position];
        success.state = new_state;
        if(new_state === "undefined") {
            throw new Error("La votación ya está en su último estado posible");
        }
        const { Update } = this.api.Utilities.QueryBuilder;
        const sql = Update.create().table("Votacion").values({ estado: new_state }).where([[ "id", "=", parameters.votacion.id ]]).toString();
        const results = await this.api.Utilities.QueryDatabase(sql);
        success.id = parameters.votacion.id;
    }

};