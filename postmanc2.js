const http = require("http");
const query = require("querystring");
const server = http.createServer((request, response) => {
    let userData = "";
    request.on("data", (chunks) => {
        userData += chunks

    });
    request.on("end", () => {
        const data = query.parse(userData);
        let username = data.username;
        let password = data.password;
        if (username == "a@gmail.com") {
          if(password == 12345){
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            const res = JSON.stringify({
                message: "login success"
            });
            response.write(res);
          }else{
            response.writeHead(401, {
                "Content-Type": "application/json"
            });
            const errmsg = JSON.stringify({
                message: "password not match"
            });
            response.write(errmsg);
          }

        } else {
            response.writeHead(401, {
                "Content-Type": "application/json"
            });
            const errmsg = JSON.stringify({
                message: "user not avelabel"
            });
            response.write(errmsg);

        }

        response.end();
    })

});
server.listen(2000);
// part 3 post man and querystring module