window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 150;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('bg-[#151B54]', 'text-white');
          document.querySelector('nav a[href*=' + id + ']').classList.add('bg-[#151B54]', 'text-white');
        });
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const navLinks = document.querySelectorAll('#menu a');

    burger.addEventListener('click', function() {
        if (menu) {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex'); 
        } else {
            console.error("Menu element not found!");
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menu.classList.contains('flex')) {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        });
    });
});