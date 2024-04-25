var currentPage = 1; // Página actual
var catalogs = [
    [
        { title: "Game Title 1", description: "Description of the game 1", imageUrl: "https://via.placeholder.com/150" },
        { title: "Game Title 2", description: "Description of the game 2", imageUrl: "https://via.placeholder.com/150" },
        { title: "Game Title 3", description: "Description of the game 3", imageUrl: "https://via.placeholder.com/150" }
    ],
    [
        { title: "Game Title 4", description: "Description of the game 4", imageUrl: "https://via.placeholder.com/150" },
        { title: "Game Title 5", description: "Description of the game 5", imageUrl: "https://via.placeholder.com/150" },
        { title: "Game Title 6", description: "Description of the game 6", imageUrl: "https://via.placeholder.com/150" }
    ]
    // Agrega más catálogos si es necesario
];

var carouselImages = [
    [
        "https://via.placeholder.com/800x400/FF5733/FFFFFF/?text=Game+1",
        "https://via.placeholder.com/800x400/FF5733/FFFFFF/?text=Game+2",
        "https://via.placeholder.com/800x400/FF5733/FFFFFF/?text=Game+3",
        "https://via.placeholder.com/800x400/FF5733/FFFFFF/?text=Game+4",
        "https://via.placeholder.com/800x400/FF5733/FFFFFF/?text=Game+5",
        "https://via.placeholder.com/800x400/FF5733/FFFFFF/?text=Game+6"
    ]
    // Agrega más conjuntos de imágenes si es necesario
];

// Función para generar las tarjetas de juegos según la página actual
function generateGameCards() {
    var gameCardsContainer = document.getElementById('gameCards');
    gameCardsContainer.innerHTML = '';
    catalogs[currentPage - 1].forEach(function (game) {
        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${game.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${game.title}</h5>
                <p class="card-text">${game.description}</p>
            </div>`;
        gameCardsContainer.appendChild(card);
    });
}

// Función para generar las imágenes del carrusel según la página actual
function generateCarouselImages() {
    var carouselInner = document.querySelector('#carouselExampleControls .carousel-inner');
    carouselInner.innerHTML = '';

    carouselImages[currentPage - 1].forEach(function (imageUrl, index) {
        var carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active');
        }
        carouselItem.innerHTML = `<img src="${imageUrl}" class="d-block w-100" alt="...">`;
        carouselInner.appendChild(carouselItem);
    });
}

// Función para actualizar el número de página mostrado
function updatePageNum() {
    document.getElementById('pageNum').textContent = currentPage;
}

// Event listeners para los botones de cambio de página
document.getElementById('prevPageBtn').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        generateGameCards(); // Genera las nuevas tarjetas al cambiar de página
        updatePageNum();
    }
});

document.getElementById('nextPageBtn').addEventListener('click', function () {
    if (currentPage < catalogs.length) {
        currentPage++;
        generateGameCards(); // Genera las nuevas tarjetas al cambiar de página
        updatePageNum();
    }
});

// Genera las tarjetas de juegos y las imágenes del carrusel para la página inicial
generateGameCards();
generateCarouselImages();