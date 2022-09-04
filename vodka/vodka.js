const API_URL = 'http://localhost:3000/vodka'


const getVodka = async () => {
    await fetch(API_URL)
        .then(res => res.json())
        .then((data) => {
            const vodka = data.map((product) => product)
            displayVodka(vodka)
        })
}

const ener = document.getElementById('ener');
const pisco = document.getElementById('pisco');
const ron = document.getElementById('ron');
const bebidas = document.getElementById('bebidas');
const snacks = document.getElementById('snacks');
const cervezas = document.getElementById('cervezas');
const index = document.getElementById('home')


ener.addEventListener('click', function() {
    window.location.href = "/energetica/energeticas.html"
})

pisco.addEventListener('click', function() {
    window.location.href = "/pisco/pisco.html"
})

ron.addEventListener('click', function() {
    window.location.href = "/ron/ron.html"
})

bebidas.addEventListener('click', function() {
    window.location.href = "/bebidas/bebida.html"
})

snacks.addEventListener('click', function() {
    window.location.href = "/snacks/snacks.html"
})

cervezas.addEventListener('click', function() {
    window.location.href = "/cervezas/cervezas.html"
})

index.addEventListener('click', function() {
    window.location.href = "../index.html"
})


function displayVodka(vodka) {
    let productListHTML = ''
    vodka.forEach(e => {
        productListHTML += `
        <div class="card">
        <div class="img"><img src='${e.url_image}' alt=""></div>
        <div class="container">
            <div class="title">${e.name}</div>
            <div class="box">
                <div class="price">Precio:$ ${e.price}</div>
                <button class="btn">Agregar</button>
            </div>
        </div>
    </div>
        `
    });
    document.getElementById('product').innerHTML = productListHTML;
}



getVodka();
