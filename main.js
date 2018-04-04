



var rugAPI = "https://randomuser.me/api/?results=12&inc=name,email,location,phone,address,dob,picture&nat=US"

// ------GET THE JSON DATA FROM RANDOM USER GENERATOR
var member = new XMLHttpRequest();
member.onreadystatechange = function() {
 if(member.readyState === 4) {
        var data = JSON.parse(member.responseText);
        var txt = "";

        function memberInfo (){
        var txt =  '<div id="grid">';
        for (let i = 0; i <data.results.length; i+=1) {
          txt +=  '<div id="cards">';
          txt += '<img src="'+ data.results[i].picture.medium + '" class="avatar">';
          txt +=  '<ul class="card-content">';
          txt += '<li id="name">' + (data.results[i].name.first.substring(0,1).toUpperCase() + data.results[i].name.first.substring(1)) + "  " +
                        (data.results[i].name.last.substring(0,1).toUpperCase() + data.results[i].name.last.substring(1)) + '</li>';
          txt +=   '<li id="email">' + data.results[i].email + '</li>';
          txt +=   '<li id="city">' + data.results[i].location.city.substring(0,1).toUpperCase() + data.results[i].location.city.substring(1) + '</li>';
          txt +=  '</ul>';
          txt += '</div>';
          }
          txt += '</div>';

          document.getElementById('directory-container').innerHTML = txt;
        }
        memberInfo();
 }
};
member.open('GET',  rugAPI);
member.send();

function modalMemberInfo() {

}


 //VARIABLES
const user = document.querySelector('.user-search');
const message = document.querySelector('.user-message');
const closeBox = document.querySelector('.close2');
const button = document.getElementById("cards");
const modalMessage = document.querySelector('.modal-message');
const modal = document.getElementById('myModal');



/*-------------ALERT MODAL POP-UP --------*/
//Get the modal
// var modal = document.getElementById('myModal');
//
// var modalContent = document.getElementById('modal-content');
//
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // // When the user loads the page, open the modal
// window.onload = function(event) {
//     if(event.target == modalContent) {
//       modalContent.style.display = "block";
//     }
// }
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modalContent.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modalContent) {
//         modalContent.style.display = "none";
//     }
// }

var wrapper = document.getElementById('directory-container');

/*------------SEND BUTTON MODAL POP-UP --------*/
// When the user clicks the members card, open the modal
$(document).ready(function(e){
$(wrapper).on('click', ".card-content", function(event){
  modal.style.display = "block";

  // var txt =  '<div id="grid">';
  // for (let i = 0; i <data.results.length; i+=1) {
  //   txt +=  '<div id="cards">';
  //   txt += '<img src="'+ data.results[i].picture.medium + '" class="avatar">';
  //   txt +=  '<ul class="card-content">';
  //   txt += '<li id="name">' + (data.results[i].name.first.substring(0,1).toUpperCase() + data.results[i].name.first.substring(1)) + "  " +
  //                 (data.results[i].name.last.substring(0,1).toUpperCase() + data.results[i].name.last.substring(1)) + '</li>';
  //   txt +=   '<li id="email">' + data.results[i].email + '</li>';
  //   txt +=   '<li id="city">' + data.results[i].location.city.substring(0,1).toUpperCase() + data.results[i].location.city.substring(1) + '</li>';
  //   txt +=  '</ul>';
  //   txt += '</div>';
  //   }
  //   txt += '</div>';
  //
  //   document.getElementById('directory-container').innerHTML = txt;

    // alert('clicked');
});
});

// When the user clicks on <span> (x), close the modal
closeBox.addEventListener('click',  function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        sendModal.style.display = "none";
    }
}
