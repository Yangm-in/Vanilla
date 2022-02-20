const images = ["0.png", "1.png", "2.png", "3.png",];
//const bgImage = document.createElement("img");
const chooseImage = images[Math.floor(Math.random() * images.length)];


//bgImage.src = `img/${chooseImage}`;

document.body.style.background = `url(img/${chooseImage})`;
document.body.style.backgroundSize = 'cover'