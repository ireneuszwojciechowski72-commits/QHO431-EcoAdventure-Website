import express from "express";

const app = express();
const PORT = 5000;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/home");
});
app.get("/habitats", (req, res) => {
  res.send("Habitats page coming soon");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
