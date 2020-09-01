let express = require("express");
let bodyParser = require("body-parser");

let app = express();
let port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (request, result) => result.send("Olá mundo SD 2020!"));

app.listen(port, function () { console.log("A iniciação do servidor correu bem!") });

let apiRoutes = require('./api-routes');

app.use("/api", apiRoutes);