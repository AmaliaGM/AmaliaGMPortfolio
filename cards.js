const cards = [
    {
        id: 1,
        image: 'images/recipe-app.png',
        heading: 'Multi-Post Stories Gain+Glory',
        badge1: 'Ruby on Rails',
        badge2: 'css',
        badge3: 'Java Script',
        badge4: 'HTML',
    },
    {
      id: 2,
      image: 'images/plan.png',
        heading: 'Multi-Post Stories Gain+Glory',
        badge1: 'Ruby on Rails',
        badge2: 'css',
        badge3: 'Java Script',
        badge4: 'HTML',
    },
    {
      id: 3,
      image: 'images/recipe-app.png',
        heading: 'Multi-Post Stories Gain+Glory',
        badge1: 'Ruby on Rails',
        badge2: 'css',
        badge3: 'Java Script',
        badge4: 'HTML',
    },
    {
      id: 4,
      image: 'images/recipe-app.png',
        heading: 'Multi-Post Stories Gain+Glory',
        badge1: 'Ruby on Rails',
        badge2: 'css',
        badge3: 'Java Script',
        badge4: 'HTML',
    },
    {
      id: 5,
      image: 'images/recipe-app.png',
        heading: 'Multi-Post Stories Gain+Glory',
        badge1: 'Ruby on Rails',
        badge2: 'css',
        badge3: 'Java Script',
        badge4: 'HTML',
    },
    {
      id: 6,
      image: 'images/recipe-app.png',
        heading: 'Multi-Post Stories Gain+Glory',
        badge1: 'Ruby on Rails',
        badge2: 'css',
        badge3: 'Java Script',
        badge4: 'HTML',
    },
]

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