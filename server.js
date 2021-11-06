//Install express server
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/activity4-1"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/activity4-1/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(port, function () {
  console.info("Angular Server App listening on port " + port);
});
