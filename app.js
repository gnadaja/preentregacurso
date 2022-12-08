window.addEventListener('load', () => {
    new Glider(document.querySelector('.carrousel__lista'), {
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: {
          prev: '.carrousel__anterior',
          next: '.carrousel__siguiente'
        }
    });
 });