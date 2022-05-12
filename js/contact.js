//Initialising email API
//function init(){
//    emailjs.init('TwLYgRBPXw8xH5uel')
//};
//init();

//Sending email
function sendEmail(){
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_58t85si', 'template_wa35t9r', this)
            .then(function() {
                console.log('SUCCESS!');
                alert("Message envoyé !");
                window.location.reload();
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert("Erreur lors de l'envoi du message !");
            });
    });
};
sendEmail();