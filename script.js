document.addEventListener("DOMContentLoaded", function() {

    const productsList = document.getElementById("productsList");
    
    const products = [
        { name: "Blanko Dusk", price: "₹1499", image: "product1.jpg",link: "https://ifeelblanko.com/products/dusk" },
        { name: "Donna Valentino", price: "₹9000", image: "product2.jpg" ,link: "https://www.shoppersstop.com/valentino-donna-born-in-roma-eau-de-parfum/p-AW23VALELB0402_base" },
        { name: "Calvin Klein BE", price: "₹5750", image: "product3.jpg" ,link: "https://www.nykaa.com/calvin-klein-ck-be-for-men-eau-de-toilette/p/17153?skuId=9890" },
        { name: "Armaf Club De Nuit", price: "₹3900", image: "product4.jpg" ,link: "https://www.amazon.in/Armaf-Club-Nuit-Intense-Parfum-150Ml/dp/B08BNTVXLN" },
        { name: "Creed Aventus", price: "₹18000", image: "product5.jpg" ,link: "https://www.amazon.in/Creed-Aventus-Parfum-Spray-118-29ml/dp/B004ECTU7O" },
        { name: "Allure", price: "₹13000", image: "product6.jpg" ,link: "https://www.fridaycharm.com/products/chanel-allure-homme-sport-eau-extreme-eau-de-perfume-for-men-100ml" },
        { name: "Bleu De Chanel", price: "₹10700", image: "product7.jpg" ,link: "https://www.chanel.com/in/fragrance/p/107360/bleu-de-chanel-eau-de-parfum-spray/" },
        { name: "Dior Sauvage", price: "₹11000", image: "product8.jpg" ,link: "https://www.perfumenetwork.in/products/dior-sauvage-eau-de-parfum" },
        { name: "Acqua Di Gio", price: "₹12000", image: "product9.jpg" ,link: "https://www.amazon.in/Giorgio-Armani-Acqua-Fragrances-Spray/dp/B000E7YK5K" },
        { name: "Elie Saab", price: "₹45000", image: "product10.jpg" ,link: "https://www.eliesaab.com/collections/fragrances-le-parfum" }
    ];
    
    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.className = "product-card";

        const imageElement = document.createElement("img");
        imageElement.src = product.image;
        imageElement.alt = product.name;

        const nameElement = document.createElement("h3");
        nameElement.textContent = product.name;

        const priceElement = document.createElement("p");
        priceElement.textContent = product.price;

        const buyButton = document.createElement("a");
        buyButton.textContent = "BUY";
        buyButton.href = product.link;
        buyButton.className = "buy-button";

        productElement.appendChild(imageElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);
        productElement.appendChild(buyButton);

        productsList.appendChild(productElement);
    });

    const scrollToProductsLink = document.getElementById("scrollToProducts");
    const featuredProducts = document.getElementById("featuredProducts");

    scrollToProductsLink.addEventListener("click", function(event) {
        event.preventDefault();
        featuredProducts.scrollIntoView({ behavior: "smooth" });
    });
});
