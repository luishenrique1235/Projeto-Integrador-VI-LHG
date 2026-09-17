// src/routes/produto.routes.ts

import { Router } from "express";
import { ProdutoController } from "../controllers/produto.controller";

const router = Router();
const controller = new ProdutoController();

router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);
router.post("/", controller.criar);

export default router;
