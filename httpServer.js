const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} ${req.method} ${req.url}\n`
    fs.appendFile("logger.txt", log, (err, data) => {
        switch(req.url){
            case('/'):
                res.end("This is home page");
                break;
            case('/about'):
                res.end("Welcome to about section");
                break;
            default:
                res.end("Page not found");
        }
    })
})

myServer.listen(8000, () => console.log("Server Started!"))