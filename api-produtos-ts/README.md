# API de Produtos — TypeScript + Node.js

Arquitetura em camadas (Route → Controller → Service → Model), orientada a objetos:

```
src/
├── models/produto.model.ts          # Classe Produto (entidade + regra própria)
├── services/produto.service.ts      # ProdutoService: usa a classe Produto para listar/buscar/criar
├── controllers/produto.controller.ts# ProdutoController: conhece HTTP, chama o Service
├── routes/produto.routes.ts         # Liga as rotas HTTP aos métodos do Controller
├── app.ts                           # Configuração do Express
└── server.ts                        # Ponto de entrada (app.listen)
```

## Rotas disponíveis

| Método | Rota            | Descrição                     |
|--------|-----------------|--------------------------------|
| GET    | /produtos       | Lista todos os produtos       |
| GET    | /produtos/:id   | Busca um produto pelo id      |
| POST   | /produtos       | Cria um novo produto          |

---

## Passo a passo — GitHub Codespaces

### 1. Criar o repositório no GitHub
No github.com, clique em **New repository**, dê um nome (ex: `api-produtos-ts`) e crie (pode deixar vazio, sem README).

### 2. Abrir um Codespace
Na página do repositório, clique em **Code** → aba **Codespaces** → **Create codespace on main**.
Isso abre um VS Code no navegador com um terminal já pronto.

### 3. Colocar os arquivos do projeto
No terminal do Codespace, se o repositório estiver vazio, envie/adicione estes arquivos (`src/`, `package.json`, `tsconfig.json`, `.gitignore`, `.devcontainer/`) exatamente com os nomes e caminhos acima (pelo upload da interface do GitHub, `git add` de um clone local, ou colando o conteúdo em novos arquivos criados direto no VS Code do Codespace).

### 4. Inicializar o projeto (caso ainda não exista o package.json)
Só rode isso se você **não** for usar o `package.json` já pronto que veio deste projeto:
```bash
npm init -y
```

### 5. Instalar as dependências
```bash
npm install express
npm install -D typescript ts-node-dev @types/node @types/express
```

### 6. Criar o tsconfig.json (caso ainda não exista)
Só necessário se você não copiou o `tsconfig.json` já pronto:
```bash
npx tsc --init
```
E depois ajuste `rootDir` para `./src` e `outDir` para `./dist`.

### 7. Rodar em modo desenvolvimento (com recarregamento automático)
```bash
npm run dev
```
O Codespace vai mostrar um popup perguntando se quer abrir a porta 3000 — clique em **Open in Browser** ou use o terminal mesmo.

### 8. Testar as rotas (em outro terminal, ou usando a extensão de porta do Codespace)
```bash
curl http://localhost:3000/produtos
curl http://localhost:3000/produtos/1
curl -X POST http://localhost:3000/produtos -H "Content-Type: application/json" -d '{"nome":"Teclado","preco":180}'
```

### 9. Gerar a versão compilada (JavaScript) para produção
```bash
npm run build
npm start
```
Isso compila `src/**/*.ts` para `dist/**/*.js` (conforme o `tsconfig.json`) e roda a versão compilada.

### 10. Subir para o GitHub
```bash
git add .
git commit -m "API de produtos em TypeScript com arquitetura em camadas"
git push
```

---

## Notas

- Os dados ficam em memória (um array de instâncias da classe `Produto` dentro do `ProdutoService`) — reiniciar o servidor reseta os dados, exatamente como pedido no desafio original.
- O `.devcontainer/devcontainer.json` já incluso faz o Codespace instalar tudo (`npm install`) automaticamente ao criar o ambiente, sem precisar repetir os passos 4 a 6 manualmente.
