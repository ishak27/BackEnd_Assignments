const url = "https://fakestoreapi.com/products";
async function getProducts() {

    const response = await fetch(url);

    const data = await response.json();

    console.log("All Products:");
    console.log(data);
}
async function addProduct() {
    const product = {
        title: "Wireless Headphones",
        price: 1999,
        category: "electronics"
    };

    const response = await fetch(url, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(product)
    });

    const data = await response.json();

    console.log("Product Added:");
    console.log(data);
}
async function updateProduct() {

    const product = {
        title: "Updated Wireless Headphones",
        price: 2499,
        category: "electronics"
    };

    const response = await fetch(url + "/1", {
        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(product)
    });

    const data = await response.json();

    console.log("Product Updated:");
    console.log(data);
}
async function updatePrice() {

    const product = {
        price: 2999
    };

    const response = await fetch(url + "/1", {
        method: "PATCH",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(product)
    });

    const data = await response.json();

    console.log("Product Price Updated:");
    console.log(data);
}
async function deleteProduct() {

    const response = await fetch(url + "/1", {
        method: "DELETE"
    });

    const data = await response.json();

    console.log("Product Deleted:");
    console.log(data);
}