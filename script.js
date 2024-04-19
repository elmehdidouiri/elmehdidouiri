document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

       
        document.getElementById("thank-you-msg").style.display = "block";

        
        document.getElementById("contact-form").style.display = "none";
    });
});






