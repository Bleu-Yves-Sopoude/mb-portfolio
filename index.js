const menuContainer = document.getElementById('toolbar');
const iconImage = menuContainer.querySelector('img');
const deskElement = document.querySelector('.desk');
const deskListElement = document.querySelector('.desk ul');
const topImgElement = document.getElementById('top-img');
const bottomImgElement = document.getElementById('bottom-img');

// mobile menu

let controller = false;
menuContainer.addEventListener('click', () => {
  if (!controller) {
    deskElement.style.display = 'flex';
    deskElement.style.background = '#fff';
    deskElement.style.position = 'absolute';
    deskElement.style.width = '100%';
    deskElement.style.height = '100vh';
    deskElement.style.top = '0px';
    deskElement.style.position = 'fixed';

    document.getElementById('toolbar').style.zIndex = '2';

    topImgElement.style.background = 'url("images/menu_mobile/image_geometry_menu_1.jpg")';
    topImgElement.style.position = 'absolute';
    topImgElement.style.width = '70vw';
    topImgElement.style.height = '30vh';
    topImgElement.style.top = '0px';
    topImgElement.style.left = '0';
    topImgElement.style.backgroundSize = '100%';
    topImgElement.style.backgroundRepeat = 'no-repeat';
    bottomImgElement.style.background = 'url("images/menu_mobile/image_geometry_menu_2.jpg")';
    bottomImgElement.style.position = 'absolute';
    bottomImgElement.style.width = '100vw';
    bottomImgElement.style.height = '220px';
    bottomImgElement.style.bottom = '0';
    bottomImgElement.style.backgroundSize = '100%';
    bottomImgElement.style.backgroundRepeat = 'no-repeat';

    deskListElement.style.listStyle = 'none';
    deskListElement.style.display = 'flex';
    deskListElement.style.flexDirection = 'column';
    deskListElement.style.alignItems = 'center';
    document.querySelectorAll('.menu a').forEach((item) => {
      item.style.textDecoration = 'none';
      item.style.color = 'black';
      item.style.fontWeight = '400px';
      item.style.size = '16px';
      item.style.fontFamily = 'Poppins';
      item.style.justifyself = 'center';
    });

    document.querySelectorAll('.menu li').forEach((item) => {
      item.style.marginBottom = '30px';
    });

    deskElement.style.paddingTop = '50%';
    deskElement.style.justifyContent = 'center';

    iconImage.src = 'images/cancel.jpg';

    controller = true;
  } else {
    iconImage.src = 'images/ic_menu.svg';
    document.querySelector('.desk').style.display = 'none';
    controller = false;
  }
});

const cancel = document.querySelector('.menu');
const cancela = cancel.querySelectorAll('a');

cancela.forEach((a) => {
  a.addEventListener('click', () => {
    controller = false;
    document.querySelector('.desk').style.display = 'none';
    iconImage.src = 'images/ic_menu.svg';
  });
});

// array for projects information

const projectInfo = [
  {
    id: 1,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project1.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript',
    ],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project2.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project3.png',
    alt: 'laptop',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project4.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 5,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project5.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 6,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project6.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
];

// project secion dynamic Html

const showModal = (projectInfo) => {
  const myModal = document.getElementById('myMOdal');
  myModal.style.display = 'flex';
  const modalBody = `<div class="modal-content">
  <button id="closemodalX" class="close-modal close">&times</button>
  <h3 class="project-title-modal">${projectInfo.name}</h3>
  <ul class="card-tech-modal">
      <li>${projectInfo.technologies[0]}</li>
      <li>${projectInfo.technologies[1]}</li>
      <li>${projectInfo.technologies[2]}</li>
  </ul>
  <img class="project-image modal-img" src="${projectInfo.image}" alt="${projectInfo.alt}">
  <p class="project-description">${projectInfo.description}</p>
  <div class="btns-modal">
      <button class="btn-modal seeLive">See live
          <img class="iconModal" src="./images/Union (8).png">
      </button>
      <button class="btn-modal seeSource">See source
          <img class="iconModal" src="./images/redes sociales/Vector (8).png">
      </button>
  </div>
  <div class="next-prev-proj">
      <button class="prev-btn"> &larr; Previous project</button>
      <button class="prev-btn">Next Project &rarr;</button>
  </div>
</div>`;
  myModal.innerHTML = modalBody;
};

const gall = document.querySelector('.gallery');

const closeModal = () => {
  const myModal = document.getElementById('myMOdal');
  myModal.style.display = 'none';
};

projectInfo.forEach((project, index) => {
  const projectId = project.id;
  const projectName = project.name;
  const projectImage = project.image;
  const projectTech = project.technologies;
  const projectImgAlt = project.alt;

  const soloArticle = document.createElement('article');
  soloArticle.classList.add('card', `card${index + 2}`);

  const cardContainer = `<img class="imgp" src="${projectImage}" alt="${projectImgAlt}" width="100%">
<div class="pData">
    <h3>${projectName}</h3>
    <ul class="projectUl">
        <li class="projectLi">${projectTech[0]}</li>
        <li class="projectLi">${projectTech[1]}</li>
        <li class="projectLi">${projectTech[2]}</li>
    </ul>
    <button class="see myBtn" id="btn${projectId}">
        See this project &nbsp →
    </button>
</div>
</article>`;

  soloArticle.innerHTML = `${cardContainer} <div class="card card-back${index + 2}"></div>`;
  gall.appendChild(soloArticle);
  const button = document.getElementById(`btn${projectId}`);
  button.addEventListener('click', () => {
    showModal(project);
    const closemodalX = document.getElementById('closemodalX');
    closemodalX.addEventListener('click', () => {
      closeModal();
    });
  });
});

// form validation

const errorMessage = document.querySelector('.error-message');
const form = document.getElementById('contact');
const email = document.getElementById('email');
const emailRegex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;

form.addEventListener('submit', (e) => {
  if (!emailRegex.test(email.value)) {
    e.preventDefault();
    errorMessage.style.display = 'block';
    email.style.border = '#dd5353 2px solid';
  }
});
// local storage

let localData = {
  name: '',
  email: '',
  message: '',
};

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('textform');

function dataLocalStore() {
  localStorage.setItem('name', JSON.stringify(localData));
}

form.addEventListener('change', () => {
  localData.name = nameInput.value;
  localData.email = emailInput.value;
  localData.message = messageInput.value;
  dataLocalStore();
});

if (JSON.parse(localStorage.getItem('name')) !== null) {
  localData = JSON.parse(localStorage.getItem('name'));
  nameInput.setAttribute('value', localData.name);
  emailInput.setAttribute('value', localData.email);
  messageInput.value = localData.message;
}
