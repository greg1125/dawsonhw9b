const express = require("express");
const multer = require("multer");
const upload = multer();
const app = express();

app.use(express.static("public"));
app.use(express.static("css"));
app.use(express.json());
app.use(upload.array());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/ex1", (req, res) => {
  res.sendFile(__dirname + "/views/ex1.html");
});

app.get("/ex2", (req, res) => {
  res.sendFile(__dirname + "/views/ex2.html");
});

app.get("/ex3", (req, res) => {
  res.sendFile(__dirname + "/views/ex3.html");
});

app.post("/ex1", (req, res) => {
  const name = req.body.name;
  const choice = req.body.choice;
  res.send(`Hello ${name}, you chose: ${choice}`);
});

app.post("/ex2", (req, res) => {
  const { name, countries } = req.body;
  const count = countries.length;
  res.send(`Your name is ${name} and you visited ${count} countries. Keep traveling!`);
});

const articles = [
  { id: 1, title: "Intro to Node.js", content: "This is Node." },
  { id: 2, title: "Working with Express", content: "Routing made easy." },
  { id: 3, title: "Handling JSON", content: "POST like a boss." }
];

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.post("/ex3", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const maxId = articles.length > 0 ? Math.max(...articles.map(a => a.id)) : 0;
  const newArticle = { id: maxId + 1, title, content };
  articles.push(newArticle);
  res.send(`New article added successfully with title "${title}" and ID ${newArticle.id}!`);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is running on port ${listener.address().port}`);
});
