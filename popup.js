card = [
    {
        id: 1,
        image: 'images/recipe-app.png',
        heading: 'Recipe App Project',
        description: 'add your recipes here',
    },
    {
      id: 2,
      image: 'images/MathMagician.jfif',
        heading: 'Math Magician Project',
        description: 'add your recipes here',
    },
    {
      id: 3,
      image: 'images/BookStore.jfif',
        heading: 'BookStore Project',
        description: 'add your recipes here',
    },
    {
      id: 4,
      image: 'images/recipe-app.png',
        heading: 'Multi-Post Stories Gain+Glory',
        description: 'add your recipes here',
    },
    {
      id: 5,
      image: 'images/recipe-app.png',
        heading: 'Multi-Post Stories Gain+Glory',
        description: 'add your recipes here',
    },
    {
      id: 6,
      image: 'images/recipe-app.png',
        heading: 'Multi-Post Stories Gain+Glory',
        description: 'add your recipes here',
    },
  ]

const popup1 = document.getElementById('popup1');

for (let i = 0; i < 6; i += 1) {
const popUpDiv = document.createElement('div');
popUpDiv.classList = 'images';
popup1.appendChild(popUpDiv);

const imgPopM = document.createElement('img');
imgPopM.classList = 'mobile img';
imgPopM.src = (card[i].image);
popUpDiv.appendChild(imgPopM);

const imgPopD = document.createElement('img');
imgPopD.classList = 'desktop img';
imgPopD.src = (card[i].image);
popUpDiv.appendChild(imgPopD);

const popDiv = document.createElement('div');
popDiv.classList = 'pop';
popup1.appendChild(popDiv);

const popUpTitle = document.createElement('h2');
popUpTitle.classList = 'popUp-title';
popUpTitle.innerHTML = card[i].heading,
popup1.appendChild(popUpTitle);

const desktopSee = document.createElement('div');
desktopSee.classList = 'desktop see';
popup1.appendChild(desktopSee);

const aDesk = document.createElement('a');
aDesk.classList = 'dSeeLive';
desktopSee.appendChild(aDesk);

const imgDL = document.createElement('img');
imgDL.src = 'images/Live.png';
aDesk.appendChild(imgDL);
const mobile = document.createElement('div');
mobile.classList = 'mobile';
popup1.appendChild(mobile);

const ulLang = document.createElement('ul');
ulLang.classList = 'languages';
popup1.appendChild(ulLang);

const liLang1 = document.createElement('li');
ulLang.appendChild(liLang1);

const liLang2 = document.createElement('li');
ulLang.appendChild(liLang2);

const liLang3 = document.createElement('li');
ulLang.appendChild(liLang3);

const liLang1a = document.createElement('a');
liLang1a.classList = 'button1';
liLang1a.innerText = 'Rubi on Rails';
liLang1.appendChild(liLang1a);

const liLang2a = document.createElement('a');
liLang2a.classList = 'button1';
liLang2a.innerText = 'css';
liLang2.appendChild(liLang2a);

const liLang3a = document.createElement('a');
liLang3a.classList = 'button1';
liLang3a.innerText = 'Java Script';
liLang2.appendChild(liLang3a);

const desktop = document.createElement('div');
desktop.classList = 'desktop';
popup1.appendChild(desktop);

const ulLang1Desk = document.createElement('ul');
ulLang1Desk.classList = 'languages';
popup1.appendChild(ulLang1Desk);

const liLang1D = document.createElement('li');
liLang1D.classList = 'button1';
liLang1D.innerText = 'Codekit';
ulLang.appendChild(liLang1D);

const liLang2D = document.createElement('li');
liLang2D.classList = 'button1';
liLang2D.innerText = 'GitHub';
ulLang.appendChild(liLang2D);

const liLang3D = document.createElement('li');
liLang3D.classList = 'button1';
liLang3D.innerText = 'Javascript';
ulLang.appendChild(liLang3D);

const liLang4D = document.createElement('li');
liLang4D.classList = 'button1';
liLang4D.innerText = 'Bootstrap';
ulLang.appendChild(liLang1D);

const liLang5D = document.createElement('li');
liLang5D.classList = 'button1';
liLang5D.innerText = 'Terminal';
ulLang.appendChild(liLang5D);

const liLang6D = document.createElement('li');
liLang6D.classList = 'button1';
liLang6D.innerText = 'Codepen';
ulLang.appendChild(liLang6D);

const loremIp = document.createElement('p');
loremIp.classList = 'loremText';
popup1.appendChild(loremIp);

const mobSee = document.createElement('div');
mobSee.classList = 'mobile see';
popup1.appendChild(mobSee);

const amobSee1 = document.createElement('div');
mobSee.appendChild(amobSee1);

const amobSee2 = document.createElement('div');
mobSee.appendChild(amobSee2);

const imgDeskLive = document.createElement('img');
amobSee1.appendChild(imgDeskLive);

const imgDeskSource = document.createElement('img');
amobSee2.appendChild(imgDeskSource);
}

document.body.appendChild(popup1);
