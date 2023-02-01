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
        const cardIcon = document.createElement("i");
        cardIcon.classList.add("fa-solid", "fa-cart-shopping");
        card.appendChild(cardIcon);


        card.appendChild(cardBody);
        document.getElementById("divsOfProducts").appendChild(card);
    }
}