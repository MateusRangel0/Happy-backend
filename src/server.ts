import express from "express";

import "./database/connection";

const app = express();

app.use(express.json());

app.get("/users", (request, response) => {
  console.log(request.query);
  // return response.json({ message: "pong" });
});

app.get("/users/:id", (request, response) => {
  // console.log(request.params);
  console.log(request.body);

  // return response.json({ message: "pong" });
});

app.listen(3333);
