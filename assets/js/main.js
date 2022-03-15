//loader
var load =  document.getElementById('preload') ;
window.addEventListener("load", function(){
    setTimeout(function(){
        load.style.display='none';
    },500)
})

//scroll 
const btn = document.querySelector('.btn__ScrollToTop');
btn.addEventListener('click', function(){
    $('html, body').animate({ scrollTop: 0},'slow');
});

// 
window.addEventListener("scroll", () => {
    var header = document.querySelector('.header__fix'); 
    header.classList.toggle("sticky", window.scrollY > 0)
})

// 
window.addEventListener("scroll", () => {
    var header = document.querySelector('.btn__ScrollToTop'); 
    header.classList.toggle("btn__scroll", window.scrollY > 0)
})