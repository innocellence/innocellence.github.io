/*
  Tracks list of invalidity message for input
  Tracks what validity checks are need to be performed for input
  Perofrms validity checks and sends feedback to front end
*/


function CustomValidation(input) {
  this.invalidities = [];
  this.validityChecks = [];

  this.inputNode = input;
  this.registerListener();
}

CustomValidation.prototype = {
  addInvalidity: function(message) {
    this.invalidities.push(message);
  },
  getInvalidities: function() {
    return this.invalidities.join('. \n');
  },
  checkValidity: function(input) {
    for ( var i = 0; i < this.validityChecks.length; i++ ) {

      var isInvalid = this.validityChecks[i].isInvalid(input);
      if (isInvalid) {
        this.addInvalidity(this.validityChecks[i].invalidityMessage);
      }

      var requirementElement = this.validityChecks[i].element;

      if (requirementElement) {
        if (isInvalid) {
          requirementElement.classList.add('invalid');
          requirementElement.classList.remove('valid');
        } else {
          requirementElement.classList.remove('invalid');
          requirementElement.classList.add('valid');
        }

      } // end if requirementElement
    } // end for
  },
  checkInput: function() { // checkInput now encapsulated

    this.inputNode.CustomValidation.invalidities = [];
    this.checkValidity(this.inputNode);

    if ( this.inputNode.CustomValidation.invalidities.length === 0 && this.inputNode.value !== '' ) {
      this.inputNode.setCustomValidity('');
    } else {
      var message = this.inputNode.CustomValidation.getInvalidities();
      this.inputNode.setCustomValidity(message);
    }
  },
  registerListener: function() { //register the listener here

    var CustomValidation = this;

    this.inputNode.addEventListener('keyup', function() {
      CustomValidation.checkInput();
    });


  }

};


var nameInputCheck = [
  {
    isInvalid: function(input) {
      return input.value.length < 3;
    },
    invalidityMessage: 'This input needs to be at least 3 characters long',
    element: document.querySelector('label[for="name"] div.message')
  }
];

var subjectInputCheck = [
  {
    isInvalid: function(input) {
      return input.value.length < 3;
    },
    invalidityMessage: 'This input needs to be at least 3 characters long',
    element: document.querySelector('label[for="subject"] div.message')
  }
];

var messageInputCheck = [
  {
    isInvalid: function(input) {
      return input.value.length < 3;
    },
    invalidityMessage: 'A message is required',
    element: document.querySelector('label[for="message"] div.message')
  }
];

var emailInputCheck = [
  {
    isInvalid: function(input) {
      if(input.value.length != 0){
        return !input.value.match(/^(([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+)?$/g);
      } else {
        return input.value.length == 0;
      }
    },
    invalidityMessage: 'Please enter a valid email address',
    element: document.querySelector('label[for="email"] div.message')
  }
];

/*
  CustomValidation

  Setup customvalidation for each input

*/
var nameInput = document.getElementById('contact-form-name');
var subjectInput = document.getElementById('contact-form-subject');
var messageInput = document.getElementById('contact-form-message');
var emailInput = document.getElementById('contact-form-email');

nameInput.CustomValidation = new CustomValidation(nameInput);
nameInput.CustomValidation.validityChecks = nameInputCheck;

subjectInput.CustomValidation = new CustomValidation(subjectInput);
subjectInput.CustomValidation.validityChecks = subjectInputCheck;

messageInput.CustomValidation = new CustomValidation(messageInput);
messageInput.CustomValidation.validityChecks = messageInputCheck;

emailInput.CustomValidation = new CustomValidation(emailInput);
emailInput.CustomValidation.validityChecks = emailInputCheck;

/*
  Event Listeners

*/

var inputs = document.querySelectorAll('input.validate-input');
var textareas = document.getElementById('contact-form-message');
var submit = document.querySelector('input[type="submit"');
var form = document.getElementById('contact-form');

function validate() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].CustomValidation.checkInput();
  }
  textareas.CustomValidation.checkInput();
}

submit.addEventListener('click', validate);
form.addEventListener('submit', validate);


//submit.addEventListener('click', function(event){
//  if(validate()){
//    alert("submit true");
//    console.log("submit true");
//    console.log(event);
//  }
//  else {
//    alert("submit false");
//    console.log("submit false");
//    event.preventDefault();
//    console.log(event);
//  }
//});
//form.addEventListener('submit', function(event){
//  if(validate()){
//    console.log("form true");
//  }
//  else {
//    console.log("form false");
//    event.preventDefault();
//    console.log(event);
//
//  }
//});
