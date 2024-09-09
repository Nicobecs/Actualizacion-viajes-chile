$(document).ready(function(){
    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 200, function(){
                window.location.hash = hash;
            });
        }
    });

    $("#enviarForm").tooltip(); 
    $("#tooltip_name").tooltip();  
    $("#tooltip_email").tooltip();  
    $("#tooltip_mensaje").tooltip();
    
});


// assets/js/index.js
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado con éxito!');
});
