function messageSend() {
    (() => {
        emailjs.init("T5MNrtwo2qWZFebTu"); // Replace with your actual public key
    })();

    const params = {
        Subject: document.querySelector("#fromSubject").value,
        from_name: document.querySelector("#fromName").value,
        from_number: document.querySelector("#fromNumber").value,
        from_email: document.querySelector("#fromEmail").value,
        message: document.querySelector("#fromMessage").value,
    };

    if(params.Subject == "" | params.from_name == "" | params.from_number == "" | params.from_email == "" | params.message == ""){
        alert("Please Fill all the  fields!");
        return
    }

    let serviceId = "service_kczfv55";
    let tamplateId = "template_mb2cm7u";

    emailjs.send(serviceId, tamplateId, params)
        .then((result) => {
            alert("Email Sent");
            console.log(result);
        })
        .catch((error) => {
            alert("There is a problem sending an email");
            console.error(error);
        });
}
