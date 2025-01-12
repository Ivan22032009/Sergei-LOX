let productGrid = document.getElementById('product-grid')
let productsArray = []
let url = 'https://my-json-server.typicode.com/RoboUmanAdm/market/products'
'


fetch(url + '/products')
    .then(async function (response) {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`); // логування
        }
        let products = await response.json();
        productGrid.innerHTML = null // Очищення контейнера
        products.forEach(p => {
            productsArray.push(p) 
            let pElem = document.createElement('div')
            pElem.classList.add('product')
            pElem.innerHTML = `
                <h2 class='product-name'>${p.name}</h2>
                <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
                <p class='product-price'>Ціна: ${p.price} грн</p>
                <p class='product-description'>${p.description}</p>
                <a href='#'>Профіль продавця</a>
                <button>Купити</button>
            `
            productGrid.appendChild(pElem) // Додаємо продукт у DOM
        })
    })


function fun() {
    console.log('Функція')
}
