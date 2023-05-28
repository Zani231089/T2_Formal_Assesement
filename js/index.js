let allStudents = []

registerAccount = () => {
    let first = document.getElementById("first").value
    let email = document.getElementById("email").value
    let number = document.getElementById("contact").value
    let subject = document.getElementById("subject").value

    if(defaultCheck = document.getElementById(defaultCheck)){
        allStudents.push({
            studentFirst: first,
            studentEmail: email,
            studentSubject: subject,
            studentNumber: contact
        })

        alert("Welcome " + first + " !" + "Thank you for your interest in" + subject + "!" + "We will contact you via the email provided:" + email + "," + "or alternatively on the phone number" + contact)
    } else{
        alert("Well, well...Why don't you sign up for the newsletter..you don't seem to interested" + first + "If you want to sign up , you better check that newsletter box!")
    }

    console.log(allStudents)
    document.getElementById("studentForm").reset();
}