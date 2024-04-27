// document.addEventListener("DOMContentLoaded", function(event) {
//     let hacker = document.querySelector('.promo__bg-up');
    
//     document.onmousemove = (e)=>{
//         let x = e.clientX / window.innerWidth;
//         let y = e.clientY / window.innerHeight;
    
//         hacker.style.transform = "translate(-" + x * 70 + "px, -" + y * 70 + "px)";
//     };
// })

document.addEventListener('DOMContentLoaded', () => {
    openModal();
    showLabel();
})

const aside = document.querySelector('.aside'),
    modal = document.querySelector('.modal');

function openModal(){
    aside.addEventListener('click', () => {
        aside.classList.toggle('active');
        modal.classList.toggle('active');
    })
}

function showLabel(){
    setTimeout(show, 30000);
    function show(){
        document.querySelector('.promo__label').classList.add('active')
    }
}

