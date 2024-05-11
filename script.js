const shareBtn = document.querySelector("#shareIcon button");
console.log(shareBtn);
const activeDiv = document.querySelector(".active");
console.log(activeDiv);
shareBtn.addEventListener("click",()=>{
    activeDiv.classList.toggle("active");

});
