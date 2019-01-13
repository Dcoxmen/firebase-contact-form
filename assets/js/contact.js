// Initialize Firebase
var config = {
  apiKey: "Api key goes here",
  authDomain: "contactform-7045e.firebaseapp.com",
  databaseURL: "https://dbname.firebaseio.com",
  projectId: "contactform",
  storageBucket: "",
  messagingSenderId: "123456456"
};
firebase.initializeApp(config);

var myMessages = firebase.database().ref("messages");

//event listener for submission of form
document.getElementById("contactForm").addEventListener("submit", formSubmit);
//submit form
function formSubmit(e) {
  e.preventDefault();

  //form values
  var name = formInputVal("name");
  var company = formInputVal("company");
  var email = formInputVal("email");
  var phone = formInputVal("phone");
  var message = formInputVal("message");

  //save message inputs
  saveMessage(name, company, email, phone, message);
  //show message sent alert
  document.querySelector(".alert").style.display = "block";

  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
}
//function for form values
function formInputVal(id) {
  return document.getElementById(id).value;
}
//function to save to firebase
function saveMessage(name, company, email, phone, message) {
  var myNewMessage = myMessages.push();
  myNewMessage.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
