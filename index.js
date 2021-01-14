const form = document.getElementById('form');
const fName = document.getElementById('firstname');
const lName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const input = document.getElementsByClassName('form-field');

const validateEmail = (email)=> {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const formValidate = (e) => {
  e.preventDefault();
  console.log(e);
  let arrI = input.length - 1;
  for (let i = 0; i < arrI; i++) {
    const element = input[i];
    if(element.value === 0) {
      console.log('empty');
    }
  }
}

form.addEventListener('submit', formValidate)
