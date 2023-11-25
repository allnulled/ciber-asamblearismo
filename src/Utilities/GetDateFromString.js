module.exports = class {
    action(dateString) {
        this.api.Utilities.Trace("api.Utilities.GetDateFromString");
        const date = new Date(dateString);
        if(isNaN(date)) {
            throw new Error("Required valid date format in «api.Utilities.GetDateFromString»");
        }
        return date;
    }
};