var pics =[
    "img/001.jpg", //0
    "img/002.jpg", //1
    "img/003.jpg", //2
    "img/005.jpg",
    "img/006.jpg",
    "img/007.jpg",
]
// here for photos
var btn = document.querySelector("#clickButton");
var img = document.querySelector(".certificatePhoto");
var counter = 1;  // 002.jpg


btn.addEventListener("click", function(){
    if(counter === 6){
        counter=0;
    }
    img.src= pics [counter];
    counter = counter + 1;
});
// continue for the frection number
