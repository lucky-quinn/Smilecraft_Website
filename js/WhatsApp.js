//rediirection into whatsapp
function processForm(event) {
    event.preventDefault();
    // Collect form data
    const form = document.forms['appointment', 'appointment-treatment', 'appointment-main'];
    const name = form['name'].value;
    const email = form['email'].value;
    const mobile = form['mobile'].value;
    const date = form['date'].value;
    const time = form['time'].value;
    const problem = form['problem'].value;

    // Create a sentence
    const sentence = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nAppointment Date and Time: ${date} ${time}\nProblem: ${problem}`;
    console.log(sentence);
    // Redirect to another URL
    const redirectUrl = `https://wa.me/919744636355?text=${encodeURIComponent(sentence)}`;
    window.location.href = redirectUrl;

    // Allow the form to submit normally
    return true;
}

function handleContactForm() {
    // Collect form data
    const form = document.forms['contact'];
    const name = form['name'].value;
    const email = form['email'].value;
    const subject = form['subject'].value;
    const message = form['message'].value;

    // Create a summary sentence
    const sentence = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    console.log(sentence);
    // Redirect to another URL
    const redirectUrl = `https://wa.me/919744636355?text=${encodeURIComponent(sentence)}`;
    window.location.href = redirectUrl;

    // Allow the form submission
    return true;
}