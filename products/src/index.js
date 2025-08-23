import faker from "faker";

let products = "";

for (let i = 0; i < 50; i++) {
    const name = faker.commerce.productName();
    const price = faker.commerce.price();

    products += `<div class="product">
        <div class="product-info">
            <h3>${name}</h3>
            <p>${price}</p>
        </div>
    </div>`;
}

document.querySelector("#dev-products").innerHTML = products;
