import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(5555, () => {
  console.log("API server on http://localhost:5555");
});
