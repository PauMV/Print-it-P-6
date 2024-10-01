// Les données des diapositives
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Initialiser l'index de la diapositive actuelle
let currentIndex = 0;

// Sélectionner les éléments du DOM une seule fois
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const bannerImage = document.getElementById('banner-img');
const bannerText = document.getElementById('banner-text');

const dots = document.querySelectorAll('.dot');

// Fonction pour mettre à jour la bannière
function updateBanner(index) {
    // Mise à jour de l'image et du texte
    bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
    bannerText.innerHTML = slides[index].tagLine;

    // Mise à jour de la sélection des points
    dots.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Gérer le clic de la flèche gauche (précédente)
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateBanner(currentIndex);
    console.log('Flèche gauche cliquée');
});

// Gérer le clic de la flèche droite (suivante)
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateBanner(currentIndex);
    console.log('Flèche droite cliquée');
});

// Initialiser la bannière à l'image et texte du premier slide
updateBanner(currentIndex);


