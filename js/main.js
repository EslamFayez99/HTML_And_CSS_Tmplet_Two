let btnIcon = document.querySelector(".sections");
let megaMenu = document.querySelector(".mega-menu");
let closeMenu = document.querySelector(".close-menu");

btnIcon.onclick = function () {

  megaMenu.classList.add('open');
  closeMenu.classList.remove('open');

}
closeMenu.onclick = function () {

  megaMenu.classList.remove('open');

}


// Create clock

setInterval (() => {

  const time = document.getElementById('clock');
  const nowDate = document.getElementById('date');

  let date = new Date();

      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDay();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = 'AM';

      if (hours > 12) {
        day_night = 'PM';
        hours = hours - 12;
      }


      if (hours < 10) {
        hours = '0' + hours;
      }

      if (minutes < 10) {
        minutes = '0' + minutes;
      }

      if (seconds < 10) {
        seconds = '0' + seconds;
      }

      time.textContent = hours + ':' + minutes + ':' + seconds + " " + day_night;
      nowDate.textContent = day + '-' + month + '-' + year;

// console.log(now);


    });


    // Create Dark And Light

    let checkBox = document.getElementById('check');
    let content = document.getElementById('content');

    checkBox.addEventListener('change', () => {

      document.body.classList.toggle('dark');
      content.classList.toggle('dark');
      megaMenu.classList.toggle('dark');

    });


    // Creat Popup With The Image
let imgProducts = document.querySelectorAll('.imgs-products .product-card');
let ProductImg = document.querySelector('.product-container');


imgProducts.forEach(img => {

  img.addEventListener("click", () => {

  ProductImg.classList.add('show');

  });
});


let closeProductImg = document.querySelector('.close');
let closeNav= document.querySelector('.close-nav');

closeProductImg.onclick = function () {

  ProductImg.classList.remove('show');

};
closeNav.onclick = function () {

  ProductImg.classList.remove('show');

};