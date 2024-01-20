const mainimgpath = document.querySelector("#bg_main img");
const imgpath = document.querySelectorAll("#bg_sub img");


console.log(mainimgpath);
for(let i = 0; i < imgpath.length; i++) {
    // console.log(imgpath[i]);

    imgpath[i].addEventListener("mouseover", (e) => {
        // console.log(e.target.src);
        // console.log(mainimgpath.src);
        mainimgpath.src = e.target.src; 
        mainimgpath.animate({opacity: [0, 1]}, 500);
    });
}