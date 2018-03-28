

//  VARIABLES
const user = document.querySelector('.user-search');
const message = document.querySelector('.user-message');
const closeBox = document.querySelector('.close2');
const sendModal = document.getElementById('myModal');
const button = document.getElementById("myBtn");
const modalMessage = document.querySelector('.modal-message');



/

/*-------------ALERT MODAL POP-UP --------*/
// Get the modal
var modal = document.getElementById('myModal');

var modalContent = document.getElementById('modal-content');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user loads the page, open the modal
window.onload = function(event) {
    if(event.target == modalContent) {
      modalContent.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalContent.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalContent) {
        modalContent.style.display = "none";
    }
}


/*------------SEND BUTTON MODAL POP-UP --------*/
// When the user clicks the button, open the modal
button.onclick = function(event) {
    event.preventDefault();
  if (user.value.length === 0 || message.value.length === 0)  {
    modalMessage.innerHTML = "Please fill out required fields!";
    sendModal.style.display = "block";
  }  else  {
    modalMessage.innerHTML = "Your message has been sent!";
    sendModal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
closeBox.addEventListener('click',  function() {
    sendModal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        sendModal.style.display = "none";
    }
}
