document.getElementById('login-submit').addEventListener('click' , function(){
  // get user email
  const emailField =document.getElementById('user-email');
  const userEmail = emailField.value;
  // get password
const passwordField = document.getElementById('user-password');
const userPassword = passwordField.value;
if(userEmail == 'arrahman5778@gmail.com' && userPassword == '3962'){
  window.location.href ='banking.html';
}

})

