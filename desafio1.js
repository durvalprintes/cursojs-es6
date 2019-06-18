class User {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends User {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new User('a@b.com', 'senha');
const Adm1 = new Admin('a@b.com', 'senha');
// console.log(User1.isAdmin()); // false
// console.log(Adm1.isAdmin()); // true
//------------------------------------------------------------------------------
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];   

//    usuarios.map(usuario => console.log(usuario.idade));

   console.log(usuarios.map(usuario => usuario.idade));
   console.log(usuarios.filter(usuario => usuario.empresa === 'Rocketseat' && usuario.idade > 18));
   console.log(usuarios.find(usuario => usuario.empresa === 'Google'));
//    usuarios.map(usuario => ({...usuario, idade: usuario.idade * 2})).filter(usuario => usuario.idade <= 50);
   console.log(usuarios.filter(usuarios => usuarios.idade * 2 <= 50));
   