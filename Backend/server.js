var express = require("express");
var app = express();
var cors = require("cors");
let api = require("./config");
const Client = require("@googlemaps/google-maps-services-js").Client;

const client = new Client({});

//REMEBER TO HIDE MY KEY OR PEOPLE STEAL BAD
app.use(cors());

app.get("/locations/:name", function(req, res) {
  console.log(req.params.name);
  client
    .findPlaceFromText({
      params: {
        key: api.googleApiKey.apiKey,
        input: req.params.name,
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

app.get("/getDetails", function(req, res) {
  client
    .placeDetails({
      params: {
        key: api.googleApiKey.apiKey,
        place_id: "ChIJlZHuWJuRwokRGCLXHgxapbI",
        fields: ["formatted_address", "place_id"]
      }
    })
    .then(resp => {
      console.log(resp);
      res.send(resp.data);
    });
});
app.listen(3000);
