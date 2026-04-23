const slides = document.querySelectorAll(".slide");

let index = 0;

// show first slide initially
slides[index].classList.add("active");

function showSlide(i){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide(){
    index++;
    if(index >= slides.length){
        index = 0;
    }
    showSlide(index);
}

// change slide every 3 seconds
setInterval(nextSlide, 3000);


// end of the hero section



const display = document.getElementById("cart-count");
const  cartButtons = document.querySelectorAll(".btn");

let countDown = 0;
cartButtons.forEach(button => {
    button.addEventListener("click", function() {
        countDown++;
        display.textContent = countDown;
        alert("Items added to the cart 🛒");
    })
})



let cart = JSON.parse(localStorage.getItem("cart")) || [];

cartButtons.forEach(button => {
    button.addEventListener("click", function(){
        
        cart.push("item"); // simple item
        localStorage.setItem("cart", JSON.stringify(cart));

        display.textContent = cart.length;

        alert("Item added 🛒");
    });
});




// get button
const darkToggle = document.getElementById("darkToggle");

// toggle dark mode
darkToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    // optional: change icon
    if (document.body.classList.contains("dark")) {
        darkToggle.textContent = "☀️";
    } else {
        darkToggle.textContent = "🌙";
    }
});