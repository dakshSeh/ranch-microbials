function sendMail(){
    let parms = {
        username:document.getElementById("username").value,
        contact:document.getElementById("contact").value,
        rating:document.getElementById("rating").value,
        product_service:document.getElementById("product_service").value,
        descriptionusername:document.getElementById("description").value,
    }
    emailjs.send("service_rq41995","template_i9u0sog",parms).then(alert("Email sent!!!"))
}