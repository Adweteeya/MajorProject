$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });
});

var firebaseConfig = {
    apiKey: "AIzaSyBi4GyAJruQHfIxdUZtrAZhJnn60vmmOmU",
    databaseURL: " https://majorproject-1e1cc-default-rtdb.firebaseio.com",
    authDomain: "majorproject-1e1cc.firebaseapp.com",
    projectId: "majorproject-1e1cc",
    storageBucket: "majorproject-1e1cc.appspot.com",
    messagingSenderId: "298116078927",
    appId: "1:298116078927:web:36456eb8a336f725adb93a",
    measurementId: "G-0BJMZN25D6"
  };
  firebase.initializeApp(firebaseConfig);

  let Message = firebase.database().ref('message');

  document.querySelector(".contact").addEventListener('submit',submitMessage);

  function submitMessage(e){
      e.preventDefault();
      
      let Username =document.querySelector("Username").value;
      let email = document.querySelector("email-id").value;
      let subject = document.querySelector("subject").value;
      let message= document.querySelector("message").value;
      
      console.log(Username, email, subject, message);
      saveMessage(Username, email, subject, message);
  }



function saveMessage(Username, email, subject, message){
    let newMessage = message.push();
    newMessage.set({
        Username: Username,
        email: email-id,
        subject: subject,
        message: message,
    });
}