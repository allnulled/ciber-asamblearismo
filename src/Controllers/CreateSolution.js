module.exports = class {

    method = "use";
    
    route = "^/CreateSolution$";

    priority = 5000;
    
    getMiddleware() {
        return [];
    }
    
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.CreateSolution");
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

    async formatParameters() {
        this.api.Utilities.Trace("api.Controllers.CreateSolution.formatParameters");
    }

    async validateParameters() {
        this.api.Utilities.Trace("api.Controllers.CreateSolution.validateParameters");
    }

    async executeQuery() {
        this.api.Utilities.Trace("api.Controllers.CreateSolution.executeQuery");
    }

};