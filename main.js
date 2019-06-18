const idade = 28;
const empresa = 'RockeSeat';

const user = {
  nome: 'Durval',
  sobrenome: 'Printes',
  idade,
  empresa,
};

const { nome, sobrenome, ...resto } = user;
console.log(nome);
console.log(resto);

const user2 = { ...user, empresa: 'Safado' };
console.log(user2);

console.log(`Meu nome ${nome} ${sobrenome} e trabalho na ${user.empresa}`);
