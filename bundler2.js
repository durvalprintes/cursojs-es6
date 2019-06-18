"use strict";

/* eslint-disable max-len */
// /* eslint-disable no-console */
// class User {
//   constructor(email, senha) {
//     this.email = email;
//     this.senha = senha;
//   }
//   isAdmin() {
//     return this.admin === true;
//   }
// }
// class Admin extends User {
//   constructor(email, senha) {
//     super(email, senha);
//     this.admin = true;
//   }
// }
// const User1 = new User('a@b.com', 'senha')
// const Adm1 = new Admin('a@b.com', 'senha')
// console.log(User1.isAdmin()); // false
// console.log(Adm1.isAdmin()); // true
// ------------------------------------------------------------------------------
// const usuarios = [
//   { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//   { nome: 'Gabriel', idade: 18, empresa: 'Rocketseat' },
//   { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];
// usuarios.map(usuario => console.log(usuario.idade));
// console.log(usuarios.map(usuario => usuario.idade));
// console.log(usuarios.filter(usuario => usuario.empresa === 'Rocketseat' && usuario.idade >= 18));
// console.log(usuarios.find(usuario => usuario.empresa === 'Google'));
// usuarios
//   .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
//   .filter(usuario => usuario.idade <= 50);
// console.log(usuarios.filter(usuarios => usuarios.idade * 2 <= 50));
// -----------------------------------------------------------------------------
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.map(item => item + 10));
// const usuario = { nome: 'Diego', idade: 23 };
// const mostraIdade = usuario => usuario.idade;
// console.log(mostraIdade(usuario));
// const nome = 'Diego';
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));
// const promise = () => new Promise((resolve, reject) => resolve());
// promise().then('teste');
// -----------------------------------------------------------------------------
// const empresa = {
//   nome: 'Rocketseat',
//   endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//   },
// };
// const {
//   nome,
//   endereco: { cidade, estado },
// } = empresa;
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC
// -----------------------------------------------------------------------------
// const mostraInfo = ({ nome, idade }) => `${nome} tem ${idade} anos.`;
// console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
// -----------------------------------------------------------------------------
// const arr = [1, 2, 3, 4, 5, 6];
// const [x, ...y] = arr;
// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]
// const soma = (a, ...x) => a + x.reduce((total, val) => total + val, 0);
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3
// -----------------------------------------------------------------------------
// const usuario = 'Diego';
// const idade = 23;
// console.log(`O usuário ${usuario} possui ${idade} anos`);
// -----------------------------------------------------------------------------
var nome = 'Diego';
var idade = 23;
var usuario = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
};
console.log(usuario);
