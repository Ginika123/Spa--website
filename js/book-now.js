const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

    // stop page reload
    e.preventDefault();

    // get values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    // simple validation message
    alert(
        "Booking Confirmed 🎉\n\n" +
        "Name: " + name + "\n" +
        "Service: " + service + "\n" +
        "Date: " + date + "\n\n" +
        "We will contact you at " + email
    );

    // reset form
    form.reset();

});




let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

bookings.push({
    name: name,
    email: email,
    service: service,
    date: date
});

localStorage.setItem("bookings", JSON.stringify(bookings));