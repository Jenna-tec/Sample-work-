//Add Event listeners to input fields


const form = document.getElementById('signup-form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

const fname_error = document.getElementById('fname_error');
const lname_error = document.getElementById('lname_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');

fname_error.textContent = '';
lname_error.textContent = '';
email_error.textContent = '';
password_error.textContent = '';


   function myFunction(){
    if(fname.value!==''){
      fname_error=''
    }
    if(lname.value!==''){
      lname_error=''
    }
    if(email.value!==''){
      email_error=''
    }
    if(password.value!==''){
      password_error=''
    }
   }


form.addEventListener('submit', (event)=>{

    var email_check = /^([A-Za-z0-9.%_])+@([A-Za-z0-9._-])+\.([A-Za-z]{2,4})$/;

  if(fname.value === '' || fname.value == null){
    fname_error.innerHTML = "Please enter your First Name*";
    event.preventDefault();//stops browser fro submitting the form
   

  }else{
    fname_error.textContent='';
    
  }
  if(lname.value === '' || lname.value == null){
    lname_error.innerHTML = "Please enter your Last Name*";
    event.preventDefault()
    
  }else{
    lname_error.textContent='';
    
  }

  if(!email.value.match(email_check)){
    email_error.innerHTML = "Please enter a valid email. Try adding the @ symbol*";
    event.preventDefault();//stops browser fro submitting the form
    

  }else{
    email_error.textContent='';
    
  }
  if(password.value.length < 8){
    password_error.innerHTML = "Password should be atleast 8 characters long*";
    event.preventDefault();//stops browser fro submitting the form
    passwordValid=false;
   }else{
    password_error.textContent='';
    
  }
    function newPage(){
      return true;
    }
    
});


const signin_form = document.getElementById('signin-form');
const email2 = document.getElementById('email2');
const password2 = document.getElementById('password2');

const email_error2 = document.getElementById('email_error2');
const password_error2 = document.getElementById('password_error2');

email_error2.textContent = '';
password_error2.textContent = '';

function myFunction2(){
  if(email2.value!==''){
    email_error2=''
  }
  if(password2.value!==''){
    password_error2=''
  }
}


signin_form.addEventListener('submit', (e)=>{
  e.preventDefault();

  var email_check2 = /^([A-Za-z0-9.%_])+@([A-Za-z0-9._-])+\.([A-Za-z]{2,4})$/;
  
  if(!email2.value.match(email_check2)){
    email_error2.innerHTML = "Please enter a valid email. Try adding the @ symbol*";
    e.preventDefault();//stops browser fro submitting the form
    

  }else{
    email_error2.textContent='';
    
  }
  if(password2.value.length < 8){
    password_error2.innerHTML = "Password should be atleast 8 characters long*";
    event.preventDefault();//stops browser fro submitting the form
   }else{
    password_error2.textContent='';
    
  }
    /*function newPage2(){
      return true;
    }*/
});
