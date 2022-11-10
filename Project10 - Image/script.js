const image = document.getElementById('image');
function change(){
    if(image.src.includes("Image1.jpg")){
        image.src = './Images/Image2.jpg'
    }
    else{
        image.src = './Images/Image1.jpg'
    }
}