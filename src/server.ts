import express from "express";

const app = express();

app.get("/ping", (request, response) => {
  console.log("pong");

  return response.json("pong");
});

app.listen(3333);
