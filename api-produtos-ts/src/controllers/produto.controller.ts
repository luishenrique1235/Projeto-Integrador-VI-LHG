// src/controllers/produto.controller.ts

import { Request, Response } from "express";
import { ProdutoService } from "../services/produto.service";

export class ProdutoController {
  private service: ProdutoService;

  constructor() {
    this.service = new ProdutoService();
  }

  // Arrow functions nas propriedades para preservar o "this"
  // quando o Express chamar esses métodos como callback de rota.

  listar = (req: Request, res: Response): void => {
    const produtos = this.service.listar();
    res.status(200).json(produtos);
  };

  buscarPorId = (req: Request, res: Response): void => {
    const produto = this.service.buscarPorId(Number(req.params.id));

    if (!produto) {
      res.status(404).json({ mensagem: "Produto não encontrado" });
      return;
    }

    res.status(200).json(produto);
  };

  criar = (req: Request, res: Response): void => {
    try {
      const produto = this.service.criar(req.body);
      res.status(201).json(produto);
    } catch (error) {
      const mensagem = error instanceof Error ? error.message : "Erro desconhecido";
      res.status(400).json({ mensagem });
    }
  };
}
