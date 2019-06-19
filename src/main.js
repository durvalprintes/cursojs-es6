import api from './api';

class App {
  constructor() {
    this.respositories = [];
    this.form = document.getElementById('repo-form');
    this.list = document.getElementById('repo-list');
    this.input = document.querySelector('input[name=repository]');
    this.registerHandler();
  }

  registerHandler() {
    this.form.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    event.preventDefault();

    const repoName = this.input.value;
    if (!repoName) return;
    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoName}`);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url },
      } = response.data;

      this.respositories.push({
        name,
        description,
        avatar_url,
        html_url,
      });

      this.input.value = '';

      this.render();
    } catch (e) {
      alert('Repositório não existe!');
    } finally {
      this.setLoading(false);
    }
  }

  setLoading(loading = true) {
    if (loading) {
      const span = document.createElement('span');
      span.setAttribute('id', 'loading');
      span.appendChild(document.createTextNode('Carregando...'));
      this.form.appendChild(span);
    } else {
      document.getElementById('loading').remove();
    }
  }

  render() {
    this.list.innerHTML = '';
    this.respositories.forEach((repo) => {
      const img = document.createElement('img');
      img.setAttribute('src', repo.avatar_url);
      const title = document.createElement('strong');
      title.appendChild(document.createTextNode(repo.name));
      const description = document.createElement('p');
      description.appendChild(document.createTextNode(repo.description));
      const url = document.createElement('a');
      url.setAttribute('target', '_blank');
      url.setAttribute('href', repo.html_url);
      url.appendChild(document.createTextNode('Acessar'));
      const item = document.createElement('li');
      item.appendChild(img);
      item.appendChild(title);
      item.appendChild(description);
      item.appendChild(url);
      this.list.appendChild(item);
    });
  }
}

new App();
