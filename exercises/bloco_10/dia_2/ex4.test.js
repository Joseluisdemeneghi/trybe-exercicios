const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Checking the returns of function getRepos', () => {

  it('should check the existence of the repositories names', () => {
    return getRepos('https://api.github.com/orgs/tryber/repos')
    .then(repo => {
      expect(repo).toContain('sd-01-week4-5-project-todo-list');
      expect(repo).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});