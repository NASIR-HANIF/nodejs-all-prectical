exports.demo = (request, response) =>{
   let userData = "";
request.on("data",(chunks)=>{
userData += chunks;
})

request.on("end",()=>{
userData = JSON.parse(userData)

   response.writeHead(200,{
      "Content-Type" : "application/json"
   });
   const message = JSON.stringify({
      message : "signUp successfully",
      mydata : JSON.stringify(userData)
   });
   response.write(message);
   response.end();

})
}