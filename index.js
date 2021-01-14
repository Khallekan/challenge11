const form = document.getElementById('form');
const fName = document.getElementById('firstname');
const lName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const input = document.getElementsByClassName('form-field');
const error = document.getElementsByClassName('error-text');

const validateEmail = (email)=> {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


const formValidate = (e) => {
  e.preventDefault();
  
  for (let i = 0; i < error.length; i++) {
    const errorT = error[i];
    const element = input[i];
    errorT.style.display = 'none';
    element.classList.remove('form-field-error');
    // errorT.setAttribute('placeholder');
  }
  
  let arrI = input.length - 1;
  for (let i = 0; i < arrI; i++) {
    const element = input[i];
    const errorT = error[i];
    if (!(element === input[2])) {
      if(element.value.length === 0) {
        errorT.style.display = 'block';
        element.classList.add('form-field-error');
        element.removeAttribute('placeholder');        
      }
    }
    if ((element  === input[2] && element.value.length === 0) || (element  === input[2] && !(validateEmail(element.value)))) {
      element.classList.add('form-field-error')
      errorT.style.display = 'block';
      element.setAttribute('placeholder', `email@example.com`);
    }
    // if 
    // let emailValue = input[2].value;
    // if (!(validateEmail(emailValue))) {
      
    // }
  }
}

form.addEventListener('submit', formValidate)
