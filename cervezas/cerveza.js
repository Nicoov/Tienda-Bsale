const API_URL = 'http://localhost:3000/cervezas'

const getCervezas = async () => {
    await fetch(API_URL)
        .then(res => res.json())
        .then((data) => {
            const cerveza = data.map((product) => product)
            displayCervezas(cerveza)
        })
}


function displayCervezas(cerveza) {
    let productListHTML = ''
    cerveza.forEach(e => {
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



getCervezas();
