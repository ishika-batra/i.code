const btn = document.querySelector('.menu-btn');
const link = document.querySelector('.nav-links-small');

btn.addEventListener('click', function () {
  console.log(link.classList);
  link.classList.toggle('show-links');
});

const navLinks = document.querySelectorAll('.nav-links-small a');

navLinks.forEach(function (navLink) {
  navLink.addEventListener('click', function () {
    link.classList.remove('show-links');
  });
});
