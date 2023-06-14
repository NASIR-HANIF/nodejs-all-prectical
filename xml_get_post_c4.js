const http = require("http");
const query = require("querystring");

const server = http.createServer((req, res) => {
    if (req.method == "GET") {
        const data = req.url.replace("/?", "");
        const userData = query.parse(data)
        const username = userData.username;
        const password = userData.password;
        if (username == "a@gmail.com") {
            if(password == 12345){
                res.writeHead(200, {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin' : "*"     
                });
                const resmessage = JSON.stringify({
                    message: "user Authorise get request well come"
                })
                res.write(resmessage);
                res.end();
            }else{
                res.writeHead(401,{
                    "Content-Type" : "application/json",
                    'Access-Control-Allow-Origin' : "*"         
                });
                const errmessage = JSON.stringify({
                    message : "password not match get request"
                })
                res.write(errmessage);
                res.end();
            }   
        }else{
            res.writeHead(401,{
                "Content-Type" : "application/json",
                'Access-Control-Allow-Origin' : "*"    
            });
            const errmessage = JSON.stringify({
                message : "user unuthntecater get request"
            })
            res.write(errmessage);
            res.end();
        }
        
    } else {
        let postData = "";
       req.on("data",(chunks)=>{
        postData += chunks
       });
       req.on("end",()=>{
        const userPostData = query.parse(postData);
       const username = userPostData.username;
       const password = userPostData.password;
        if (username == "a@gmail.com") {
            if(password == 12345){
                res.writeHead(200, {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin' : "*" 
    
                });
                const resmessage = JSON.stringify({
                    message: "user Authorise well come post request"
                })
                res.write(resmessage);
                res.end();

            }else{
                res.writeHead(401,{
                    "Content-Type" : "application/json",
                    'Access-Control-Allow-Origin' : "*" 
                });
                const errmessage = JSON.stringify({
                    message : "password not match post request"
                });
                res.write(errmessage);
                res.end();
            }
           

        }else{
            res.writeHead(401,{
                "Content-Type" : "application/json",
                'Access-Control-Allow-Origin' : "*" 
    
            });
            const errmessage = JSON.stringify({
                message : "user unuthntecater post request"
            })
            res.write(errmessage);
            res.end();
        }
       });   
    }

    
});
server.listen(2000);