const { error } = require("console");
const http = require("http");
const mongodb = require("mongodb").MongoClient;
const server = http.createServer((request,response)=>{
    const url = "mongodb://127.0.0.1:27017";
const deleteData = {id : 6};
   
mongodb.connect(url).then((conn)=>{
    const db = conn.db("just");
db.collection("products").deleteOne(deleteData).then((updateRes)=>{
        response.write("delete success");
        response.end();
    }).catch((error)=>{
        throw error
    })
   
}).catch((error)=>{
throw error
})
});
server.listen(8080);

/*
db.collection("products").countDocuments()
collection me tamam document ki lenght batay ga 
to array methood nahi lagana hey jab document length maloom karna ho 

*/
// --------------------------------------------------------

/*
sort me object key ko likhna hey or 1 ya -1
dena hey -1 deney se zeada price pehley aye ge
date me dene se zeada wali date aye gi


 const sortDatadeacending = {
        purchased_at : -1     ya 1 me 
    }
*/



/*
db.collection("products")
.find()
.sort(sortData)
.toArray()
.then((resdata)=>{
    console.log(resdata);
    
    response.end();
}).catch((error)=>{
    throw error;
})*/

// --------------------------------------------------------------
/*

$set : {}
update one me object me id ya colum or us ka number dena ho ga
or dosrey object me key or value dena ho gi jo update karna hey


const idlocation = {id : 4};
    const updateProduct = {
        $set :{
          product_name : "pen drive",
          price : 55000}
         };

*/

/*
up datemany me 1 se zeada object ko update nahi kia jata balkey 1 he 1d pe moojood 
jitney bhi object hun gen un ko update ker dey ga
update one me pehley jo id miley gi us hi ko update karey ga

*/
// -----------------------------------------------------------
/*

delete one me object me key me id key set karna hey or property me id number
dena hota hey
deleteOne and deleteMany

const deleteData = {id : 6};
.deleteOne(deleteData)

*/
