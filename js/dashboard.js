const ordersEl = document.getElementById("orders");
const revenueEl = document.getElementById("revenue");
const customersEl = document.getElementById("customers");

// get data
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// update UI
ordersEl.textContent = cart.length;
customersEl.textContent = bookings.length;

// simple revenue logic
let revenue = cart.length * 30; // fake price per item
revenueEl.textContent = "$" + revenue;