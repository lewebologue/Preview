//Récuperation des informations du formulaire
function getFormData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let childName = document.getElementById("childName").value;
    let childAge = document.getElementById("childAge").value;
    let message = document.getElementById("message").value;

    const formData = {
        name: name,
        email: email,
        childName: childName,
        childAge: childAge,
        message: message
    };

    return formData;
};

//Envoi des données au serveur
function sendFormData(){
    const formData = getFormData();
    const sendData ={
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const url  = 'http://localhost:3000/contact';
    fetch(url, sendData)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.status === 'success'){
            alert('Votre message a bien été envoyé');
        }
        else{
            alert('Une erreur est survenue');
        }
    })
};