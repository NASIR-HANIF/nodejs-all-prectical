const http = require("http");
const mongodb = require("mongodb").MongoClient;
const server = http.createServer((request, response) => {
    const url = "mongodb://127.0.0.1:27017";
    const data = [
        {
            name: "a@gmail.com",
            tel: 2445360,
            city: "karachi",
            roll : 1
        },
        {
            name: "b@gmail.com",
            tel: 2445360,
            city: "karachi",
            roll : 2
        },
        {
            name: "c@gmail.com",
            tel: 2445360,
            city: "karachi",
            roll : 3
        },
    ]
    mongodb.connect(url).then((connection) => {
        const db = connection.db("just");
        db.collection("users").insertMany(data).then((datares) => {
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            const resmess = JSON.stringify({ message: "data insert successfully" });
            response.write(resmess);
            response.end();
        }).catch((error) => {
            response.writeHead(501, {
                "Content-Type": "application/json"
            });
            const errmess = JSON.stringify({ message: "data not inserted" });
            response.write(errmess);
            response.end();
        })
    }).catch((error) => {
        throw error;
    })
});
server.listen(8080);