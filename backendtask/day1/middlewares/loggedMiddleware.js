// creating a middleware that is use to log the get method and url and timestamp


export const loggerMiddleware = (req, res, next) => {
    const method = req.method
    const url = req.url
    const timestamp = new Date().toLocaleString()
    console.log(`method :${method} | url : ${url} | timestamp : ${timestamp}`)
    next()  // it is very important to move to next middlewares
}