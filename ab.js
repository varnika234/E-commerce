let ul=document.querySelector("ul");
let visible=document.querySelector(".visible");
let b=document.querySelector(".burger");
b.addEventListener('click',()=>{
    ul.classList.toggle('visible');
})
