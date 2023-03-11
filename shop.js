
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/shop', { useNewUrlPreser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('eroro', console.error.bind(console, 'connection error: '));
// db.once('open', function () {
//     console.log('connection open');
// });

// const branches = new mongoose.Schema({
//     city: String,
//     street: String,
//     phone: Number,
//     opening_hours: String,
//     email: String
// });

// const branch = mongoose.model('branch', branches);
// const Bnei_Brak = new branch({ city: 'bnei brak', street: 'Ezra 12', phone: '035797654', opening_hours: '10:00-21:00', email: 'shopbb@shop.com' });
// const jerusalem = new branch({ city: 'jerusalem', street: 'Neria 35', phone: '025797653', opening_hours: '10:00-21:00', email: 'shopjr@shop.com' });


// const jewelry = new mongoose.Schema({
//     name: String,
//     cost: Number,
//     img: String,
//     category: String,
//     color: String
// });

const jewel = mongoose.model('jewel', jewelry);

const ring1 = new jewel({ name: 'star ring', cost: '190', img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/08/198492C01_1661157706469-270x270.png', category: 'rings', color: 'silver' });
const ring2 = new jewel({ name: 'Red heart ring', cost: '150', img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/08/199267C01_1661238296938-270x270.png', category: 'rings', color: 'red' });
const ring3 = new jewel({ name: 'Classic ring', cost: '419', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/196250CZ_1661070288648-390x418.png.webp', category: 'rings', color: 'silver' });
const ring4 = new jewel({ name: 'wide ring', cost: '425', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/198676C01-390x418.png.webp', category: 'rings', color: 'silver' });
const ring5 = new jewel({ name: 'flower ring', cost: '335', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/01/190786C01_1673880218870-390x418.png.webp', category: 'rings', color: 'silver' });


const bracelet1 = new jewel({ name: 'Link bracelet', cost: '300', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/599588C00_1660830045367-390x418.png.webp', category: 'bracelet', color: 'silver' });
const bracelet2 = new jewel({ name: 'fabric bracelet', cost: '140', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/590749CPE_1661070689604-390x418.png.webp', category: 'bracelet', color: 'purple' });
const bracelet3 = new jewel({ name: 'Bracelet with heart clasp', cost: '779', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/10/582257C00_1666247896015-390x418.png.webp', category: 'bracelet', color: 'gold' });
const bracelet4 = new jewel({ name: 'Link bracelet', cost: '379', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/599588C00_1660830045367-390x418.png.webp', category: 'bracelet', color: 'silver' });
const bracelet5 = new jewel({ name: 'Black leather bracelet', cost: '259', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/590745CBK_1661328859824-390x418.png.webp', category: 'bracelet', color: 'black' });


const earring1 = new jewel({ name: 'Snowflake earrings', cost: '190', img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/10/292370C01_1666742577770.png', category: 'earring', color: 'silver' });
const earring2 = new jewel({ name: 'Star earrings', cost: '285', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/10/262375C01_1666742512800-390x418.png.webp', category: 'earring', color: 'gold' });
const earring3 = new jewel({ name: 'Blue stone earrings', cost: '425', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/290040C01_ABC123_MODEL_eCOM_01_RGB-1.jpg.webp', category: 'earring', color: 'blue' });
const earring4 = new jewel({ name: 'hoop earrings', cost: '285', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/289532C00-390x418.png.webp', category: 'earring', color: 'gold' });
const earring5 = new jewel({ name: 'flower earrings', cost: '335', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/01/280781C01_1673880334586-390x418.png.webp', category: 'earring', color: 'purple' });


const necklace1 = new jewel({ name: 'infinity necklace', cost: '335', img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/08/398821C01.png', category: 'necklace', color: 'silver' });
const necklace2 = new jewel({ name: 'Blue pendant necklace', cost: '425', img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/08/390055C01.png', category: 'necklace', color: 'blue' });
const necklace3 = new jewel({ name: 'Heart necklace', cost: '469', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/590534CZ-390x418.png.webp', category: 'necklace', color: 'silver' });
const necklace4 = new jewel({ name: 'Circle pendant necklace', cost: '599', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/389483C01-390x418.png.webp', category: 'necklace', color: 'silver' });
const necklace5 = new jewel({ name: 'Necklace of links and pearls', cost: '820', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/09/362302C01_1663891294083-390x418.png.webp', category: 'necklace', color: 'gold' });
// const jewel = mongoose.model('jewel', jewelry);
// const ring1 = new jewel({ );
// const ring2 = new jewel();
// const bracelet1 = new jewel({ name: 'Link bracelet', cost: '300', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/599588C00_1660830045367-390x418.png.webp', category: 'bracelet', color: 'silver' });
// const bracelet2 = new jewel({ name: 'fabric bracelet', cost: '140', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/590749CPE_1661070689604-390x418.png.webp', category: 'bracelet', color: 'purple' });

const productdata = [
    {
        name: 'star ring', cost: '190',
        img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/08/198492C01_1661157706469-270x270.png',
        category: 'rings', color: 'silver'
    },

    {
        name: 'Red heart ring', cost: '150',
        img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/08/199267C01_1661238296938-270x270.png',
        category: 'rings', color: 'red'
    },
    {
        name: 'fabric bracelet', cost: '140',
        img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/590749CPE_1661070689604-390x418.png.webp',
        category: 'bracelet', color: 'purple'
    },
    {
        name: 'Star earrings', cost: '285',
        img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/10/262375C01_1666742512800-390x418.png.webp',
        category: 'earring', color: 'gold'
    },
    {
        name: 'Heart necklace', cost: '469',
        img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/590534CZ-390x418.png.webp',
        category: 'necklace', color: 'silver'
    }

];
let productdatafilter;
let inputValues = [];
let filterproductbt3parameters;
let checker;

function filering(kind) {

    if (kind === 'all')
        productdatafilter = productdata;
    else
        productdatafilter = productdata.filter(object => object.category === kind);
    loadProducts()
}
function displayInputs() {
    // Get the div element that will contain the input fields
    var inputDiv = document.getElementById("input-container");

    // Check if there are any inputs already displayed
    if (inputDiv.hasChildNodes()) {
        // If there are, remove them
        inputDiv.innerHTML = "";
    } else {
        // If there aren't, create 3 input elements
        var productCategory = document.createElement("input");
        productCategory.type = "text";
        productCategory.placeholder = "Enter product category";
        productCategory.required = true;
        productCategory.classList.add("filtering");



        var productColor = document.createElement("input");
        productColor.type = "text";
        productColor.placeholder = "Enter product color";
        productColor.required = true;
        productColor.classList.add("filtering");


        var productPrice = document.createElement("input");
        productPrice.type = "number";
        productPrice.placeholder = "Enter product price";
        productPrice.required = true;
        productPrice.classList.add("filtering");



        // Add the input elements to the div
        inputDiv.appendChild(productCategory);
        inputDiv.appendChild(productColor);
        inputDiv.appendChild(productPrice);

        var button = document.createElement("button");
       // button.classList.add("btn btn-outline-secondary");
        button.innerText = "Get Input Values";
        button.onclick = function () {
            if(productCategory.value && productColor.value && productPrice.value){

                var inputValues = [
                    productCategory.value,
                    productColor.value,
                    productPrice.value
                ];
                console.log('asdfghjk', inputValues)
                filterproductbt3parameters = productdata.filter(object => {
                    return (
                        object.category == inputValues[0] &&
                        object.color == inputValues[1] &&
                        object.cost == inputValues[2]
                    )
                    // console.log("object",object);
    
                })
                productdatafilter=filterproductbt3parameters;
                loadProducts()
                console.log('filterproductbt3parameters', filterproductbt3parameters)
    
            }
        else {
            alert('please enter valid data')
        }
            
        };
        inputDiv.appendChild(button);
    }
}

function displayValues() {


    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "text") {
            inputValues.push(inputs[i].value);
        }
    }
    console.log("inputValues", inputValues);

}



function loadProducts() {
    const data = productdatafilter || productdata
    checker = false
    cleardata = document.getElementById("divsOfProducts");
    cleardata.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.display = "inline-block"
        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top")
        cardImg.setAttribute("src", data[i].img);
        card.appendChild(cardImg);
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const nameOfProduct = document.createElement("span");
        nameOfProduct.classList.add("name-product");
        nameOfProduct.innerHTML = data[i].name;
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerHTML = data[i].category + '   |   ' + data[i].color
            + '   |   ' + data[i].cost + '   שח';
        cardBody.appendChild(nameOfProduct);
        cardBody.appendChild(cardText);
        const cardIcon = document.createElement("i");
        cardIcon.classList.add("fa-solid", "fa-cart-shopping");
        card.appendChild(cardIcon);
        card.appendChild(cardBody);
        document.getElementById("divsOfProducts").appendChild(card);
    }
}

function get_branches() {
    fetch("/branches").then(res => res.json()).then(branches => {
        let html = ""
        branches.forEach(branch => {
            html += "<p> " + branch.city + "</br>" + branch.street + "</br>" + branch.phone + "</br>" + branch.opening_hours + "</br>" + branch.email + "</p>"
        })
        document.getElementById("branches").innerHTML = html;
    });

}
get_branches();