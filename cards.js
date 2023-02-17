const cards = [
    {
        id: 1,
        image: 'images/AwesomeBooks.png',
        heading: 'Awesome Books',
        badge1: 'Ruby on Rails',
        badge2: 'css',
        badge3: 'Java Script',
        badge4: 'HTML',
        description: 'This is an app where you can add your selection of books while keeping them in order and delete them whenever you want. Does not occupy space since its storaged in browser.',
        liveLink: 'https://amaliagm.github.io/AwesomeBooks/',
        projectLink: 'https://github.com/AmaliaGM/AwesomeBooks/settings/pages'
    },
    {
      id: 2,
      image: 'images/MathMagician.jfif',
      heading: 'Math Magician Project',
      badge1: 'Ruby on Rails',
      badge2: 'css',
      badge3: 'Java Script',
      badge4: 'HTML',
      description: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
      liveLink: 'https://6311b740bac0255f5dde5d58--tiny-blini-c2f1f7.netlify.app/calc',
      projectLink: 'https://github.com/AmaliaGM/MathMagician'
    },
    {
      id: 3,
      image: 'images/ExpensesCheck!.png',
      heading: 'Expenses Check!',
      description: 'ExpensesCheck is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      badge1: 'Ruby on Rails',
      badge2: 'css',
      badge3: 'Java Script',
      badge4: 'HTML',
      liveLink: 'https://expensescheck.onrender.com/',
      projectLink: 'https://github.com/AmaliaGM/ExpensesCheck'
    },
    {
      id: 4,
      image: 'images/Oceans&Trails.png',
      heading: 'Oceans&Trails Project',
      badge1: 'Ruby on Rails',
      badge2: 'css',
      badge3: 'Java Script',
      badge4: 'HTML',
      description: 'Oceans and Trails its an app which helps you reserve and create travel packages, this app consist of a front end developed in react/redux and a back end developed with Ruby on Rails to create an API.',
      liveLink: 'https://development--zesty-semolina-00f39e.netlify.app/home',
      projectLink: 'https://github.com/AmaliaGM/oceans_and_trails_frontend'
    },
    {
      id: 5,
      image: 'images/SurgeryMeet.png',
      heading: 'SurgeryMeet',
      description: 'ExpensesCheck is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      badge1: 'Ruby on Rails',
      badge2: 'css',
      badge3: 'Java Script',
      badge4: 'HTML',
      liveLink: 'https://amaliagm.github.io/CapstoneProject',
      projectLink: 'https://github.com/AmaliaGM/CapstoneProject'
    },
    {
      id: 6,
      image: 'images/Monet React.png',
      heading: 'Monet - React',
      description: 'This React capstone project is about building a mobile web application to check a list that was created making use of React and Redux.',
      badge1: 'Ruby on Rails',
      badge2: 'css',
      badge3: 'Java Script',
      badge4: 'HTML',
      liveLink: 'https://amaliagm.github.io/react-capstone-project/',
      projectLink: 'https://github.com/AmaliaGM/react-capstone-project'
    },
]

const testFunction = (id) => {
  const popup1 = document.getElementById('popup1');
  popup1.classList = 'popup1'
  popup1.innerHTML = `<h1>${cards[id].heading}</h1>
  <p>${cards[id].description}</p>
  <a href="${cards[id].liveLink}">
  <img src="./images/Live.png" alt="see live">
  </a>
  <a href="${cards[id].projectLink}">
  <img src="./images/Source.png" alt="see live">
  </a>
  <img src="${cards[id].image}" alt="image">
 `
}

const append = document.getElementById('append');
const sectionD = document.createElement('div');
sectionD.classList = 'descript';
append.appendChild(sectionD);

const planHolder = document.createElement('div');
planHolder.classList = 'planholder';
sectionD.appendChild(planHolder);

for (let i = 0; i < 6; i += 1) {
  const div = document.createElement('div');
  div.classList = 'div';
  planHolder.appendChild(div);

  const imgPH = document.createElement('img');
  imgPH.classList = 'img';
  imgPH.src = (cards[i].image);
  div.appendChild(imgPH);

  const subTitle = document.createElement('h2');
  subTitle.classList = 'subtitle';
  subTitle.innerHTML = cards[i].heading;
  div.appendChild(subTitle);

  const newUl = document.createElement('ul');
  newUl.classList = 'language';
  div.appendChild(newUl);

  const newItem1 = document.createElement('li');
  const newItem2 = document.createElement('li');
  const newItem3 = document.createElement('li');
  const newItem4 = document.createElement('li');
  newUl.appendChild(newItem1);
  newUl.appendChild(newItem2);
  newUl.appendChild(newItem3);
  newUl.appendChild(newItem4);

  const newLink1 = document.createElement('a');
  const newLink2 = document.createElement('a');
  const newLink3 = document.createElement('a');
  const newLink4 = document.createElement('a');
  newLink1.classList = 'button1';
  newLink2.classList = 'button1';
  newLink3.classList = 'button1';
  newLink4.classList = 'button1';
  newItem1.appendChild(newLink1);
  newItem2.appendChild(newLink2);
  newItem3.appendChild(newLink3);
  newItem4.appendChild(newLink4);
  newLink1.innerText = 'Ruby on Rails';
  newLink2.innerText = 'css';
  newLink3.innerText = 'Java Script';
  newLink4.innerText = 'html';
  const popUp = document.querySelector('.popup1');
  const projects = document.createElement('button');
  projects.classList = 'projects';
  projects.innerText = 'See Project';
  projects.setAttribute('id', i);
  projects.setAttribute('onclick', `testFunction(${i})`)
  div.appendChild(projects);
  projects.addEventListener('click', () => {
    popUp.classList.add('active');
    append.classList.add('inactive');
  });

  append.appendChild(sectionD);
}

const popUp = document.querySelector('.popup1');
popUp.addEventListener('click', () => {
  popUp.classList.remove('active');
  append.classList.remove('inactive');
});

window.onscroll = function() {myFunction()};
var header = document.getElementById('navbar1');
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}