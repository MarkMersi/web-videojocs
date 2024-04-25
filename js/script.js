var currentPage = 1; // Página actual
var catalogs = [
    [
        { title: "Game Title 1", description: "Description of the game 1", imageUrl: "https://via.placeholder.com/150", pageUrl: "../videojuegos/videojuego1.html" },
        { title: "Game Title 2", description: "Description of the game 2", imageUrl: "https://via.placeholder.com/150", pageUrl: "../videojuegos/videojuego2.html" },
        { title: "Game Title 3", description: "Description of the game 3", imageUrl: "https://via.placeholder.com/150", pageUrl: "../videojuegos/videojuego3.html" }
    ],
    [
        { title: "Game Title 4", description: "Description of the game 4", imageUrl: "https://via.placeholder.com/150", pageUrl: "../videojuegos/videojuego4.html" },
        { title: "Game Title 5", description: "Description of the game 5", imageUrl: "https://via.placeholder.com/150", pageUrl: "../videojuegos/videojuego5.html" },
        { title: "Game Title 6", description: "Description of the game 6", imageUrl: "https://via.placeholder.com/150", pageUrl: "../videojuegos/videojuego6.html" }
    ]
    // Agrega más catálogos si es necesario
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
                <button class="btn btn-primary next-game-btn">View Details</button>
            </div>`;
        gameCardsContainer.appendChild(card);
        
        // Agrega un evento de clic al botón para navegar a la página correspondiente
        var nextGameBtn = card.querySelector('.next-game-btn');
        nextGameBtn.addEventListener('click', function () {
            window.location.href = game.pageUrl;
        });
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

// Genera las tarjetas de juegos para la página inicial
generateGameCards();
updatePageNum();
