import express from "express";

const app = express();
const PORT = 5000;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/habitats", (req, res) => {
  res.render("habitats");
});
app.get("/experiences", (req, res) => {
  res.render("experiences");
});
app.get("/faq", (req, res) => {
  res.render("faq");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
