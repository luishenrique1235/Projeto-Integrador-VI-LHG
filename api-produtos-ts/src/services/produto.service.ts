// src/services/produto.service.ts

import { Produto } from "../models/produto.model";

export interface CriarProdutoDTO {
  nome: string;
  preco: number;
}

export class ProdutoService {
  // A regra de negócio fica centralizada aqui.
  // Quem representa e mantém o estado de cada produto é a classe Model (Produto).
  private produtos: Produto[] = [
    new Produto({ id: 1, nome: "Notebook", preco: 3500 }),
    new Produto({ id: 2, nome: "Mouse", preco: 120 }),
  ];

  listar(): Produto[] {
    return this.produtos;
  }

  buscarPorId(id: number): Produto | undefined {
    return this.produtos.find((produto) => produto.id === Number(id));
  }

  criar(dados: CriarProdutoDTO): Produto {
    if (!dados.nome || dados.preco == null) {
      throw new Error("nome e preco são obrigatórios");
    }

    const produto = new Produto({
      id: this.produtos.length + 1,
      nome: dados.nome,
      preco: dados.preco,
    });

    this.produtos.push(produto);
    return produto;
  }
}
