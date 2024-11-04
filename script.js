const galleries = {
  shoot1: [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg'
  ],
  shoot2: [
    'a.jpeg',
    'b.jpeg',
    'c.jpeg',
    'd.jpeg'
  ],
  shoot3: [
    'p.jpg',
    'q.jpg',
    'r.jpg',
    's.jpg',
    't.jpg'
  ]
};

let currentGallery = [];
let currentSlide = 0;

function openLightbox(gallery) {
  currentGallery = galleries[gallery];
  currentSlide = 0;
  document.getElementById('lightbox').style.display = 'flex';
  showSlide();
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function showSlide() {
  const img = document.getElementById('lightbox-img');
  img.src = currentGallery[currentSlide];
}

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + currentGallery.length) % currentGallery.length;
  showSlide();
}
