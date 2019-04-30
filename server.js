const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
let app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const db = require("./db/models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// console.log(require("atstendanceRoutes/apiRoutes"));
require("./attendanceRoutes/apiRoutes")(app);
// require("./attendanceRoutes/htmlRoutes")(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});



