document.querySelector('.burger-btn').addEventListener('click',()=> {
document.querySelector('.header-links').classList.toggle('active');
document.querySelector('.burger-btn').classList.toggle('active');
document.body.classList.toggle('overflow');
});