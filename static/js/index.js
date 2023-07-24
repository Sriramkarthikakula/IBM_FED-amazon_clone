const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener('click',function(event){
    const content = document.querySelector('.product-slide');
    content.scrollLeft+=250;
    event.preventDefault(); 
})

leftbtn.addEventListener('click',function(event){
    const content = document.querySelector('.product-slide');
    content.scrollLeft-=250;
    event.preventDefault();
});

const leftbtn1 = document.querySelector(".btn-lb");
const rightbtn1 = document.querySelector(".btn-la");

rightbtn1.addEventListener('click',function(event){
    const content = document.querySelector('.product-slide-1');
    content.scrollLeft+=250;
    event.preventDefault(); 
})

leftbtn1.addEventListener('click',function(event){
    const content = document.querySelector('.product-slide-1');
    content.scrollLeft-=250;
    event.preventDefault();
});


const leftbtn2 = document.querySelector(".btn-lb1");
const rightbtn2 = document.querySelector(".btn-la1");

rightbtn2.addEventListener('click',function(event){
    const content = document.querySelector('.product-slide-2');
    content.scrollLeft+=250;
    event.preventDefault(); 
})

leftbtn2.addEventListener('click',function(event){
    const content = document.querySelector('.product-slide-2');
    content.scrollLeft-=250;
    event.preventDefault();
});


const leftbtn3 = document.querySelector(".btn-lb2");
const rightbtn3 = document.querySelector(".btn-la2");

rightbtn3.addEventListener('click',function(event){
    const content = document.querySelector('.product-slide-3');
    content.scrollLeft+=400;
    event.preventDefault(); 
})

leftbtn3.addEventListener('click',function(event){
    const content = document.querySelector('.product-slide-3');
    content.scrollLeft-=400;
    event.preventDefault();
});


const leftbtn4 = document.querySelector(".btn-lb3");
const rightbtn4 = document.querySelector(".btn-la3");

rightbtn4.addEventListener('click',function(event){
    const content = document.querySelector('.product-slide-4');
    content.scrollLeft+=400;
    event.preventDefault(); 
})

leftbtn4.addEventListener('click',function(event){
    const content = document.querySelector('.product-slide-4');
    content.scrollLeft-=400;
    event.preventDefault();
});


const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".into");
const dark = document.querySelector(".backdark");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click",function(){
    sidebar.classList.add("active");
    cross.classList.add("active");
    dark.classList.add("active");
    document.body.classList.add("stop-scroll");
})

cross.addEventListener("click",function(){
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    dark.classList.remove("active");
    document.body.classList.remove("stop-scroll");
})


const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click",function(){
    dark.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
})
