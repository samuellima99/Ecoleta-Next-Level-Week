<h3 align="center">
    <img alt="Logo" title="#logo" width="200px" src=".github/ecoleta.svg">
    <br><br>
    <br>
</h3>

## Sobre o projeto

♻️🚀 Next Level Week - O Ecoleta é uma aplicação desenvolvida para ajudar pessoas a encontrarem pontos de coleta para reciclagem. Esta aplicação foi construída na trilha Booster da Next Level Week que é uma semana de curso dada pela Rocketseat. A trilha Booter foi ministrada pelo **[Diego Fernandes](https://github.com/diego3g)** CTO da Rocketseat.

## O projeto

<h3 align="center">
    <img alt="Logo" title="#capa" width="100%" src=".github/project.png">
    <br><br>
    <br>
</h3>

## Tecnologias utilizadas

### 🗄 Projeto do server

- Typescript
- NodeJs
- Sqlite 3
- knex
- Multer
- Celebrate

### 💻 Projeto web

- Typescript
- ReactJs
- Axios
- Leaflet
- React-dropzone
- React-router-dom
- React-icons

### 📱 Projeto mobile

- Typescript
- React Native
- Expo
- React-navigation

## Como utilizar o projeto

### 🔹 Pré-requisitos

- Necessário possuir o **NodeJs** instalado na sua máquina.
- Necessário possuir um gerenciador de pacotes como **NPM** ou **YARN**.
- Por fim, é de suma importância ter o **Expo** instalado de forma global na sua máquina.

1.  Clonar o projeto em sua máquina:

```sh
  $ git clone https://github.com/samuellima99/Ecoleta-Next-Level-Week.git
```

2.  Instale as depedências em cada projeto. Server, Ecoleta-Web e Ecoleta-Mobile.

```sh
 ##Instalando as dependências
  $ yarn

  ou

  $ npm
```

2. Configurando o banco dados:

```sh
 ##Rodando as migrations e os seeds

  $ cd server
  $ yarn run knex:migrate
  $ yarn run knex:seed

  ou

  $ npm run knex:migrate
  $ npm run knex:seed
```

3. Para iniciar o server basta executar o comando abaixo na pasta server:

```sh
 ##Iniciando o server
  $ yarn run dev

  ou

  $ npm run dev


```

4. Para iniciar o projeto web basta executar o comando abaixo na pasta ecoleta-web:

```sh
 ##Iniciando o projeto web
  $ yarn start

  ou

  $ npm start


```

5. Para iniciar o projeto mobile basta conectar seu device ou emulador e executar o comando abaixo na pasta ecoleta-mobile:

```sh
 ##Iniciando o server
  $ yarn start

  ou

  $ npm start


```

## Como contribuir

Para contribuir no projeto basta seguir os passos abaixo:

- Faça o Fork do projeto,
- Crie uma branch com a feature criada por você: `$git checkout -b feature`
- Faça o commit de suas mudanças: `git commit -m 'new feature'`
- Faça o push na sua branch: `git push origin feature`

---

<h4 align="center">
    Criado por <a href="https://www.linkedin.com/in/samuel-lima-220658163/" target="_blank">Samuel Lima</a> 👨‍💻
</h4>
