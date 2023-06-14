const http = require("http");
const mongodb = require("mongodb").MongoClient;
const server = http.createServer((request, response) => {
  const url = "mongodb://127.0.0.1:27017";
  mongodb
    .connect(url)
    .then((conn) => {
      const db = conn.db("collage");
      const data = {
        name: "hanif",
        roll: 123456,
        dob: "02-05-2025"
      };
      db.collection("students").insertOne(data).then((datares) => {
        response.writeHead(200, {
          "Content-Type": "application/json"
        });
        const succmsg = JSON.stringify({
          message: "Data Inserted Successfully"
        })
        response.write(succmsg);
        response.end();

      }).catch((error) => {
        response.writeHead(501, {
          "Content-Type": "application/json"
        });
        const errmsg = JSON.stringify({
          message: "unable insert data"
        })
        response.write(errmsg);
        response.end();
      })
    })
    .catch((error) => {
      console.log("database not connected");
      response.write("database not connected");
      response.end();
    });

});
server.listen(8080);
