var currentPage = 0; // Página actual (comenzamos desde 0 para que la numeración coincida con el índice de los catálogos)
var catalogs = [
    [
        { title: "Nier Automata", description: "39,99€", imageUrl: "../../img/juegos/nier_automata.jpg", pageUrl: "../videojuegos/Nier_Automata.html" },
        { title: "Grand Theft Auto V", description: "14,99€", imageUrl: "../../img/juegos/gta_v.jpg", pageUrl: "../videojuegos/GTA_V.html" },
        { title: "Red Dead Redemption 2", description: "19,99€", imageUrl: "../../img/juegos/rdr2.jpg", pageUrl: "../videojuegos/Red_Dead_Redemption2.html" }
    ],
    [
        { title: "Metal Gear Rising Revengance", description: "34,99€", imageUrl: "../../img/juegos/mgr_revengeance.jpg", pageUrl: "../videojuegos/Metal_Gear_Rising_Revengeance.html" },
        { title: "Dark Souls 2016", description: "35,99€", imageUrl: "../../img/juegos/dark_souls_2016.jpg", pageUrl: "../videojuegos/Dark_Souls_2016.html" },
        { title: "Terraria", description: "9,99€", imageUrl: "../../img/juegos/terraria.jpg", pageUrl: "../videojuegos/Terraria.html" }
    ]
    // Agrega más catálogos si es necesario
];

// Función para generar las tarjetas de juegos según la página actual
function generateGameCards() {
    var gameCardsContainer = document.getElementById('gameCards');
    gameCardsContainer.innerHTML = '';
    catalogs[currentPage].forEach(function (game) {
        var card = document.createElement('div');
        card.classList.add('card');
        
        var image = document.createElement('img');
        image.src = game.imageUrl;
        image.classList.add('card-img-top', 'game-image');
        image.alt = "...";
        
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        
        var title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = game.title;
        
        var description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = game.description;
        
        var button = document.createElement('button');
        button.classList.add('btn', 'btn-primary', 'redirect-btn');
        button.textContent = 'Ir al juego';
        button.addEventListener('click', function () {
            window.location.href = game.pageUrl;
        });
        
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(button);
        
        card.appendChild(image);
        card.appendChild(cardBody);
        
        gameCardsContainer.appendChild(card);
    });
    
    // Actualizar el número de página
    document.getElementById('pageNum').textContent = currentPage + 1;
}

// Genera las tarjetas de juegos para la página inicial
generateGameCards();

// Función para ir a la siguiente página
function nextPage() {
    currentPage++;
    if (currentPage >= catalogs.length) {
        currentPage = 0;
    }
    generateGameCards();
}

// Función para ir a la página anterior
function prevPage() {
    currentPage--;
    if (currentPage < 0) {
        currentPage = catalogs.length - 1;
    }
    generateGameCards();
}

// Asignar eventos a los botones de "Siguiente" y "Anterior"
document.getElementById('nextPageBtn').addEventListener('click', nextPage);
document.getElementById('prevPageBtn').addEventListener('click', prevPage);
