const http = require("http");
const server = http.createServer((reqest,response)=>{
    var name = "a@gmail.com";
    const password = 12345;
    if(name == "a@gmail.com" && password == 12345){
        response.writeHead(200,{
            "Content-Type" : "application/json"
        });
        const myResponse = {
            message : "log in success"
        }
        const goResponse = JSON.stringify(myResponse);
        response.write(goResponse);
        response.end();

    }else{
        response.writeHead(401,{
            "Content-Type" : "application/json"
        });
        const myResponse = {
            message : "user not avalabel"
        }
        const goResponse = JSON.stringify(myResponse);
        response.write(goResponse);
        response.end();
    }

});
server.listen(2000);