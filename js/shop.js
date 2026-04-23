const searchInput = document.getElementById("searchInput");

const products = document.querySelectorAll(".product");

searchInput.addEventListener("input", function () {

    let value = searchInput.value.toLowerCase();

    products.forEach(product => {

        let name = product.querySelector(".name").textContent.toLowerCase();

        if (name.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});