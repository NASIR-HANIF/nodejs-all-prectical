const http = require("http");
const mongodb = require("mongodb").MongoClient;
const server = http.createServer((request, response) => {
    const url = "mongodb://127.0.0.1:27017";
    /*
    const queryAllDataFind = {
        name: "c@gmail.com", // jo query match karna ho sirf wo hi den
        tel: 2445360,     
        city: "karachi",
        roll : 3
    }*/

    
const myProjection = {
    projection : {
        _id : 0,
        city : 0,
        tel : 0,
        roll : 0
    }
}
   

    const query = {
        name: "c@gmail.com"   // email match kia
    };

    mongodb.connect(url).then((connection) => {
        const db = connection.db("just");
        db.collection("users").find(query,myProjection).toArray().then((datares) => { 
             
            console.log(datares)
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            const resmess = JSON.stringify({ message: datares});
            response.write(resmess);
            response.end();
        }).catch((error) => {
            response.writeHead(501, {
                "Content-Type": "application/json"
            });
            const errmess = JSON.stringify({ message: "data not avalabel" });
            response.write(errmess);
            response.end();
        })
    }).catch((error) => {
        throw error;
    })
});
server.listen(8080);

   // query find ker ke jo bhi data mila us ka pura object mil jaye ga
   // or us object ko array me set kia
   // jo bhi query find hoti hey us ka pur object milta hey
          //  db.collection("users").find(query).toArray()
          // db.collection("users").find(query).limit(3).toArray()
          // arrey ki limit set ker saktey hen
          // jo query match nahi karey gi waha [] empty array miley ga
          // query me multipel data find karney pe ager 1 bhi query key miss ya 
          // query match na huvi to empty array miley ga 


           /*  projection 
    query ke sath projection laganey se object se
     jo data chahey ho ga sirf wo hi miley ga 

     const myProjection = {
        projection : {
            _id : 0,
            city : 0,
            tel : 0,
            roll : 0
        }
    }
    
    /*
data me mojood object ki jis key ko nahi chahey us key ki ko 0 ker 
dena hey projection me or projection object ko query ke sath , dal ke likhna heu


db.collection("users").find(query,myProjection).toArray().then()
    */  



