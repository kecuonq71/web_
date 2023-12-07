document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (name && email && phone && message) {

        alert("Thank you for contacting us");

        window.location.href = "index.html";
    } else {
        
        alert("Please fill in all the fields");
    }
});
