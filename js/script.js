const notify = document.querySelector('.notify-btn')
const email = document.querySelector('.email')

function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.value = "";
        return (true)
    }
    document.querySelector('.errorMsg').innerText = "Please provide a valid email address"
    email.classList.add('error')
    return (false)
}
notify.addEventListener("click", () => {
    useremail = email
    ValidateEmail(useremail)
})
email.addEventListener('change', () => {
    document.querySelector('.errorMsg').innerText = "";
    email.classList.remove('error')
})