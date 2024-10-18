function login() {
  let validEmail = 'aptech@ph.com'
  let validUsername = 'aptechph'
  let validPassword = 'aptechph123'

  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if(email === validEmail && username === validUsername && password === validPassword) {
    alert("Login succesful!");
    window.location.href = "welcome.html"
}
else {
    // document.getElementById("error-message").style.display = "block";
    // al
    alert("Invalid credentials")
}
}
