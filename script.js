
document.addEventListener(`DOMContentLoaded` () => {
    const contactForm = document.getElementById("contactform");

    contactform.addEventListener(`submit` ,(event) => {
        event.preventDefault();

        const name = document.getElementById(`name`).value;
        const email = document.getElementById(`email`).value;
        const message = document.getElementById(`message`).value;

        const formdata = {
            name: name,
            email: email,
            message: message,
        };
        console.log(`formdata:` ,formdata);

        contactForm.reset();
    });
});