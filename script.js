document.querySelector("#find").addEventListener("click", function(){
    document.querySelector(".menu").classList.add("active");
});

document.querySelector(".menu .close-button").addEventListener("click", function(){
    document.querySelector(".menu").classList.remove("active");
});