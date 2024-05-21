# Desafio de Front-end para Vaga de Bolsista

Este projeto é um desafio de front-end para a vaga de bolsista. O objetivo é criar uma página SPA (Single Page Application) semelhante ao webplayer do Spotify (fora da sessão de usuário), utilizando dados mockados de um backend.

## Tecnologias Utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Emotion CSS](https://emotion.sh/docs/introduction)

## Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd seu-repositorio
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```
    ou, se você estiver usando Yarn:
    ```sh
    yarn
    ```

## Execução

Para iniciar o servidor de desenvolvimento, execute o comando:

```sh
npm run dev
```
ou, se você estiver usando Yarn:

```sh
yarn dev
```

O servidor de desenvolvimento estará disponível em http://localhost:3000.

## Build para Produção
Para compilar o projeto para produção, execute o comando:

```sh
npm run build
```

ou, se você estiver usando Yarn:

```sh
yarn build
```

Os arquivos compilados estarão na pasta dist.

## Servir a Build
Para servir a build compilada localmente, você pode usar o comando:

```sh
npm run serve
```

ou, se você estiver usando Yarn:

```sh
yarn serve
```

## Estrutura do Projeto

```sh
seu-repositorio/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── styles/
│   ├── App.tsx
│   └── index.tsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── tsconfig.json
```

## Contribuindo
Se você deseja contribuir com o projeto, por favor, siga estas diretrizes:
Faça um fork do repositório.
Crie uma branch para sua feature ou correção:
```sh
git checkout -b minha-nova-feature
```
Faça o commit das suas alterações:
```sh
git commit -m 'Adiciona nova feature'
```
Envie para a branch original:
```sh
git push origin minha-nova-feature
```
