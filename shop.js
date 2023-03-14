
let productdata
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

        button.classList.add("btn");
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



function loadProducts(productdata) {
    const data = productdatafilter || productdata
    checker = false
    cleardata = document.getElementById("divsOfProducts");
    cleardata.innerHTML = '';

    for (var i = 0; i < data?.length; i++) {
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
            + '   |   ' + data[i].cost + '   ILS';
        cardBody.appendChild(nameOfProduct);
        cardBody.appendChild(cardText);
        // const cardIcon = document.createElement("i");
        // cardIcon.classList.add("fa-solid", "fa-cart-shopping");
        // card.appendChild(cardIcon);
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
async function get_Jewelry() {
    fetch("/jewelry").then(res => res.json()).then(items => {
        productdata = items
       items.forEach(item =>{
         const card = document.createElement("div");
        card.classList.add("card");
        card.style.display = "inline-block"
        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top")
        cardImg.setAttribute("src", item.img);
        card.appendChild(cardImg);
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const nameOfProduct = document.createElement("span");
        nameOfProduct.classList.add("name-product");
        nameOfProduct.innerHTML = item.name;
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerHTML =item.category + '   |   ' + item.color
            + '   |   ' + item.cost + '   ILS';
        cardBody.appendChild(nameOfProduct);
        cardBody.appendChild(cardText);
        // const cardIcon = document.createElement("i");
        // cardIcon.classList.add("fa-solid", "fa-cart-shopping");
        // card.appendChild(cardIcon);
        card.appendChild(cardBody);
        document.getElementById("divsOfProducts").appendChild(card);


       })
    })
   
}


get_Jewelry();
get_branches();

async function verify_DB() {
    const admin_email = document.querySelector('#admin-email').value;
    const admin_password = document.querySelector('#admin-password').value;
  
    const response = await fetch(`/check-email?email=${admin_email}&password=${admin_password}`);
    const data = await response.json();
    
    if (data.exists) {
      window.location.href = '/shop.html';
    } else {
      alert('I don\'t recognize you :(');
    }
  }
  
  const form = document.querySelector('form');
  const button = form.querySelector('button');
  
  button.addEventListener('click', verify_DB);