const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
    if (request.url == "/") {
        fs.readFile("routes/home.html", (error, datares) => {
            if (error) {
                throw error
            } else {
                response.writeHead(200, {
                    "Content-type": "text/html"
                });
                response.write(datares);
                response.end();
            }
        })

    } else if (request.url == "/contect") {
        fs.readFile("routes/contect.html", (error, resdata) => {
            if (error) {
                throw error
            } else {
                response.writeHead(200, {
                    "Content-Type": "text/html"
                })
                response.write(resdata);
                response.end();
            }
        })

    } else if (request.url == "/about-us") {
        fs.readFile("routes/about-us.html", (error, resdata) => {
            if (error) {
                throw error
            } else {
                response.writeHead(200, {
                    "Content-Type": "text/html"
                })
                response.write(resdata);
                response.end();
            }
        })

    } else {
        fs.readFile("routes/not-found.html", (error, resdata) => {
            if (error) {
                throw error
            } else {
                response.writeHead(404, {
                    "Content-Type": "text/html"
                })
                response.write(resdata);
                response.end();
            }
        })
    }

});
server.listen(8080);
