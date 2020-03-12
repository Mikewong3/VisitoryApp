var express = require("express");
var app = express();
var cors = require("cors");
let api = require("./config");
const Client = require("@googlemaps/google-maps-services-js").Client;

const client = new Client({});

//REMEBER TO HIDE MY KEY OR PEOPLE STEAL BAD
app.use(cors());
app.get("/", function(req, res) {
  client
    .findPlaceFromText({
      params: {
        key: api.googleApiKey.apiKey,
        input: "Morton's The Steakhouse",
        inputtype: "textquery"
      }
    })
    .then(resp => {
      console.log(resp.data.candidates);
      res.send(resp.data.candidates);
    })
    .catch(e => {
      console.log(e);
    });
});
// let testData = [{ name: "Mike" }];
// app.get("/", function(req, res) {
//   res.send(testData);
//   console.log("Get called");
// });
app.listen(3000);
