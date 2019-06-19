// const delay = msg => new Promise(resolve => setTimeout(() => {
//   resolve(msg);
// }, 1000));
// const umPorSegundo = async () => {
//   console.log(await delay('1s'));
//   console.log(await delay('2s'));
//   console.log(await delay('3s'));
// };
// umPorSegundo();
// -----------------------------------------------------------------------------
import axios from 'axios';

// const getUserFromGithub = async (user) => {
//   try {
//     const response = await axios.get(`https://api.github.com/users/${user}`);
//     console.log(response.data);
//   } catch (err) {
//     console.log('Usuário não existe');
//   }
// };
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');
// -----------------------------------------------------------------------------
// class Github {
//   static async getRepositories(repo) {
//     try {
//       const response = await axios.get(`https://api.github.com/repos/${repo}`);
//       console.log(response.data);
//     } catch (err) {
//       console.log('Repositório não existe!');
//     }
//   }
// }
// Github.getRepositories('rocketseat/dslkvmskv');
// Github.getRepositories('durvalprintes/cursojs-es6');
// -----------------------------------------------------------------------------
const buscaUsuario = async (usuario) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }
};
buscaUsuario('diego3g');
