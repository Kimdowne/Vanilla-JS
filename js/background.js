const images = [
  "korea-night-houses.jpg",
  "korea-seoulfountain-night-lights.jpg",
  "korea-road-lights.jpg",
  "korea-park-landscape.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
