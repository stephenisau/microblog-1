/** Server for microblog. */

const app = require("./app");
require("dotenv").config();

app.listen(process.env.PORT || 5000, function () {
  console.log("Server is listening on port 5000");
});


if(process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res) {
   	res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}
