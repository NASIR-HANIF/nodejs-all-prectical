const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
    // Dynamic route function
const route = (path, response, code,type) => {
    fs.readFile(path, (error, datares) => {
        if (error) {
            throw error
        } else {
            response.writeHead(code, {
                "Content-type": type
            });
            response.write(datares);
            response.end();
        }
    })
}
    //html route check
    if (request.url == "/" || request.url == "/home") {
        const path = "routes/home.html";
        const code = 200;
        const type = "text/html";
        route(path, response, code,type)
    } else if (request.url == "/contect") {
        const path = "routes/contect.html";
        const code = 200;
        const type = "text/html";
        route(path, response, code,type)
    } else if (request.url == "/about-us" || request.url == "/about") {
        const path = "routes/about-us.html";
        const code = 200;
        const type = "text/html";
        route(path, response, code,type)
        // css file request
    }else if(request.url == "/css/home.css"){
        const path = "css/home.css";
        let code = 200;
        let type = "text/css";
        route(path,response,code,type)
    }else if(request.url == "/css/contect.css"){
        const path = "css/contect.css";
        let code = 200;
        let type = "text/css";
        route(path,response,code,type)
    }else if(request.url == "/css/about.css"){
        const path = "css/about.css";
        let code = 200;
        let type = "text/css";
        route(path,response,code,type)
    }else if(request.url == "/css/notfound.css"){
        const path = "css/notfound.css";
        let code = 200;
        let type = "text/css";
        route(path,response,code,type)
        // images path 
    } else if(request.url == "/images/gifs.gif"){
        const path = "images/gifs.gif";
        let code = 200;
        let type = "image/gif";
        route(path,response,code,type)
        //javascript path
    } else if(request.url == "/js/main.js"){
        const path = "js/main.js";
        let code = 200;
        let type = "text/javascript";
        route(path,response,code,type)
    }
    else {
        const path = "routes/not-found.html";
        const code = 404;
        const type = "text/html"
        route(path, response, code,type)
    }
});


server.listen(8080);
