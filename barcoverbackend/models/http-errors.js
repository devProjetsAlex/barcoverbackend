class HttpError extends Error {
    constructor(message, errorCode){
    super(message); //{donne la possibilité de créer un props message que je passerais ensuite au composante dans mon backend}
    this.code= errorCode // {rajoute une props code a au emssage}
    }
}

module.exports = HttpError