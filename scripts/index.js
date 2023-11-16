let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    menu.style.width = '15%';
  } else {
    menu.style.width = '0';
  }
});


// window.addEventListener('load', function () {
//     let hamburger = document.querySelector('.hamburger');
//     let menu = document.querySelector('.navbar');
  
//     hamburger.addEventListener('click', function () {
//       hamburger.classList.toggle('isactive');
//       menu.classList.toggle('active');
  
//       if (menu.classList.contains('active')) {
//         menu.style.width = '15%';
//       } else {
//         menu.style.width = '0';
//       }
//     });
//   });
  