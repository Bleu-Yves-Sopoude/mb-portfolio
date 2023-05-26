const menuContainer = document.getElementById('toolbar');
const iconImage = menuContainer.querySelector('img');


const deskElement = document.querySelector('.desk');
const deskListElement = document.querySelector('.desk ul');
const topImgElement = document.getElementById('top-img');
const bottomImgElement = document.getElementById('bottom-img');


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
