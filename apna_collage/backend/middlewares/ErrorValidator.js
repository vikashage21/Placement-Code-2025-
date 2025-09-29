class ErrorValidator extends Error {
    constructor(status,message){
        super();
        this.status,
        this.message
    }
}

module.exports = ErrorValidator