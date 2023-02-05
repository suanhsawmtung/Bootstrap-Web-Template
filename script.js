const corner = document.querySelector('#corner');
const home = document.querySelector('#home');
const homeNav = document.querySelector('#home-nav');
const rating = document.querySelector('#rating');
const review = document.querySelector('#review');


corner.addEventListener('click', () => {
    if (corner.classList.contains('fw-bold')) return;
    rating.classList.remove('d-block');
    rating.classList.add('d-none');
    review.classList.remove('col-md-7', 'col-xl-9');
    home.classList.add('d-none');
    homeNav.classList.remove('fw-bold');
    corner.classList.add('fw-bold');
});

homeNav.addEventListener('click', () => {
    if (homeNav.classList.contains('fw-bold')) return;
    rating.classList.add('d-block');
    rating.classList.remove('d-none');
    review.classList.add('col-md-7', 'col-xl-9');
    home.classList.remove('d-none');
    corner.classList.remove('fw-bold');
    homeNav.classList.add('fw-bold');
})