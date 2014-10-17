function c(string) {
    console.log(string);
}

function slideshow() {
    var img = document.getElementsByName("slide");
    for (var i = 0; i < img.length; i++) {
        c(img[i]);
    }
}