
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shop', { useNewUrlPreser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('eroro', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('connection open');
});

const branches = new mongoose.Schema({
    city: String,
    street: String,
    phone: Number,
    opening_hours: String,
    email: String
});

const branch = mongoose.model('branch', branches);
const Bnei_Brak = new branch({ city: 'bnei brak', street: 'Ezra 12', phone: '035797654', opening_hours: '10:00-21:00', email: 'shopbb@shop.com' });




function loadProducts() {
    for (var i = 0; i < 9; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.display = "inline-block"
        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top")
        cardImg.setAttribute("src", "https://randomuser.me/api/portraits/men/52.jpg");
        card.appendChild(cardImg);
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const nameOfProduct = document.createElement("span");
        nameOfProduct.classList.add("name-product");
        nameOfProduct.innerHTML = "Name";
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerHTML = "Some quick example text to build on the card title and make up the bulk of the card's content.";
        cardBody.appendChild(nameOfProduct);
        cardBody.appendChild(cardText);
        // const shoppingCartICon = document.createElementNS('', 'svg');
        // shoppingCartICon.classList.add("icon-shopping-cart");
        // card.appendChild(shoppingCartICon);
        card.appendChild(cardBody);
        document.getElementById("divsOfProducts").appendChild(card);
    }
}