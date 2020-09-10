const openBtn=document.querySelector(".answer-btn");
const answerBox=document.querySelector(".answer");
const closeBtn=document.querySelector(".close-btn");

openBtn.addEventListener("click",function(){
    answerBox.classList.toggle("show-answer");
    openBtn.classList.add("hide-btn");
    closeBtn.classList.add("show-btn");
    console.log("done");
});
closeBtn.addEventListener("click",function(){
    answerBox.classList.remove("show-answer");
    openBtn.classList.remove("hide-btn");
    closeBtn.classList.remove("show-btn");
});