import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json())

app.use(categoriesRoutes);

app.get("/", (request, response) => {
  return response.json({ message: "working on mac" })
});

app.post("/courses", (request, response) => {
  const { name } = request.body;
  return response.json(name);
})

app.listen(3333, () => console.log("server is on"));
