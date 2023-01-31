
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
const jerusalem = new branch({ city: 'jerusalem', street: 'Neria 35', phone: '025797653', opening_hours: '10:00-21:00', email: 'shopjr@shop.com' });


const jewelry = new mongoose.Schema({
    name: String,
    cost: Number,
    img: String,
    category: String,
    color: String
});

const jewel = mongoose.model('jewel', jewelry);
const ring1 = new jewel({ name: 'star ring', cost: '190', img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/08/198492C01_1661157706469-270x270.png', category: 'rings', color: 'silver' });
const ring2 = new jewel({ name: 'Red heart ring', cost: '150', img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/08/199267C01_1661238296938-270x270.png', category: 'rings', color: 'red' });
const bracelet1 = new jewel({ name: 'Link bracelet', cost: '300', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/599588C00_1660830045367-390x418.png.webp', category: 'bracelet', color: 'silver' });
const bracelet2 = new jewel({ name: 'fabric bracelet', cost: '140', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/590749CPE_1661070689604-390x418.png.webp', category: 'bracelet', color: 'purple' });





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