function sendMailMessage() {
    let parms = {
        email: document.getElementById("email-3b9a").value,
        name: document.getElementById("full_name").value,
        message: document.getElementById("message-3b9a").value,
    };

    emailjs.send("service_p3mehz9", "template_j3hiodf", parms)
        .then(() => alert("Thanks for filling out the form! - Merci d'avoir rempli le formulaire !"))
        .catch((error) => alert("Une erreur s'est produite : " + error));
}