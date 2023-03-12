

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

        var productColor = document.createElement("input");
        productColor.type = "text";
        productColor.placeholder = "Enter product color";

        var productPrice = document.createElement("input");
        productPrice.type = "text";
        productPrice.placeholder = "Enter product price";

        // Add the input elements to the div
        inputDiv.appendChild(productCategory);
        inputDiv.appendChild(productColor);
        inputDiv.appendChild(productPrice);

        var button = document.createElement("button");
        button.innerText = "Get Input Values";
        button.onclick = function () {
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
            productdatafilter = filterproductbt3parameters;
            loadProducts()
            console.log('filterproductbt3parameters', filterproductbt3parameters)

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
            html += branch.city + "</br>" + branch.street + "</br>" + branch.phone + "</br>" + branch.opening_hours + "</br>" + branch.email
        })
        document.getElementById("branches").innerHTML = html;
    });
}

get_branches();

