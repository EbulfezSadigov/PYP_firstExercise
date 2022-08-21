function changeImage(image){
    var BigImage = document.querySelector(".right .img-wrapper img");
    BigImage.src=image.src;
    BigImage.parentElement.style.display="block"
}