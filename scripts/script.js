let errorPrompt = document.querySelector('#error-prompt');
let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#password-confirm');

function validatePassword(){
  console.log('text');
  if(password.value !== passwordConfirm.value){
    errorPrompt.textContent = '*Passwords do not match';
    return false
  }else{
    return true;
  }
}
