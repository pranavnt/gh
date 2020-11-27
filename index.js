const app = require("express")();

const PORT = 4567;

// put your username here
const USERNAME = "pranavnt";

app.get("/", function (req, res) {
  res.redirect("https://github.com/" + USERNAME);
});

app.get("/:repo", function (req, res) {
  res.redirect("https://github.com/" + USERNAME + "/" + req.params.repo);
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
