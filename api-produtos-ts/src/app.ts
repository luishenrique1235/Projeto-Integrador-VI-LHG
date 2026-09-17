// src/app.ts

// src/app.ts

import express, { Application } from "express";
import produtoRoutes from "./routes/produto.routes";

const app: Application = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/produtos");
});

app.use("/produtos", produtoRoutes);

export default app;
