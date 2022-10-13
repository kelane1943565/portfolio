const competence = document.querySelector('.competence');
const qualite = document.querySelector('.qualite');
const defaut = document.querySelector('.defaut');
const jaime = document.querySelector('.jaime');
const histoire = document.querySelector('.histoire');

const competences = document.querySelector('.competences');
const qualites = document.querySelector('.qualites');
const defauts = document.querySelector('.defauts');
const jaimes = document.querySelector('.jaimes');
const histoires = document.querySelector('.histoires');

competence.addEventListener('click', () => {
  competences.classList.remove('inactive');
  qualites.classList.add('inactive');
  defauts.classList.add('inactive');
  jaimes.classList.add('inactive');
  histoires.classList.add('inactive');
});

qualite.addEventListener('click', () => {
  qualites.classList.remove('inactive');
  competences.classList.add('inactive');
  defauts.classList.add('inactive');
  jaimes.classList.add('inactive');
  histoires.classList.add('inactive');
});

jaime.addEventListener('click', () => {
  qualites.classList.add('inactive');
  competences.classList.add('inactive');
  defauts.classList.add('inactive');
  jaimes.classList.remove('inactive');
  histoires.classList.add('inactive');
});

defaut.addEventListener('click', () => {
  qualites.classList.add('inactive');
  competences.classList.add('inactive');
  defauts.classList.remove('inactive');
  jaimes.classList.add('inactive');
  histoires.classList.add('inactive');
});

histoire.addEventListener('click', () => {
  qualites.classList.add('inactive');
  competences.classList.add('inactive');
  defauts.classList.add('inactive');
  jaimes.classList.add('inactive');
  histoires.classList.remove('inactive');
});
