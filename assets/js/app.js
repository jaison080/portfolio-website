// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyAvaMMS2bolSFlvGdI0n0o0OfyJvaU_XNo",
    authDomain: "portfolio-website-4c65a.firebaseapp.com",
    databaseURL: "https://portfolio-website-4c65a-default-rtdb.firebaseio.com",
    projectId: "portfolio-website-4c65a",
    storageBucket: "portfolio-website-4c65a.appspot.com",
    messagingSenderId: "762524555256",
    appId: "1:762524555256:web:888ff724c9ab87234a680d"
}
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name,email,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }