$(document).ready(function () {

//VARIABLES
const modal = document.getElementById('myModal');
let employees = [];

// function titleCase(str) {
//    var splitStr = str.toLowerCase().split(' ');
//    for (var i = 0; i < splitStr.length; i++) {
//        // Assign it back to the array
//        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//    }
//    // Directly return the joined string
//    return splitStr.join(' ');
// }
//




function displayModal(person) {
      $('#myModal').show();

      var fullbday = person.dob;
      fullbday = fullbday.substring(0, fullbday.length-8);

      var txt =  '<div id="myModal">';
      txt += '<div class="modal">';
      txt +=  '<div id="modal__contents">';
      txt += '<span class="close">&times;</span>';
      txt += '<img src="'+ person.picture.large + '" class="avatar">';
      txt +=  '<ul class="modal-card-content">';
      txt += '<li id="name">' + (person.name.first.substring(0,1).toUpperCase() + person.name.first.substring(1)) + "  " +
                    (person.name.last.substring(0,1).toUpperCase() + person.name.last.substring(1)) + '</li>';
      txt +=   '<li id="email">' + person.email + '</li>';
      txt +=   '<li id="city">' + person.location.city.substring(0,1).toUpperCase() + person.location.city.substring(1) + '</li>';
      txt +=  '</ul>';
      txt += '<ul class="employee-info">';
       txt += '<li id="phone">' + person.phone + ' </li>'
      txt += '<li id="address"> ' + person.location.street +" " + person.location.state + " " + person.location.postcode + ' </li>'
      txt += '<li id="birthday">' + "Birthday: "  + fullbday  +' </li>'
      txt += '<span class="arrow-right"></span>';
      txt += '<span class="arrow-left"></span';
      txt +=  '</ul>';
      txt += '</div>';
      $('#myModal').html(txt)

      //  When the user clicks on <span> (x), close the modal
    $('.close').on('click',  function() {
          location.reload();  // $('#myModal').remove();
    });


}


var rugAPI = "https://randomuser.me/api/?results=12&inc=name,email,location,phone,dob,picture&nat=US"

// ------GET THE JSON DATA FROM RANDOM USER GENERATOR
$.getJSON(rugAPI,  function(data) {
    var data = data.results;
    employees = data;
    console.log(data);
  // ----------Create Employee Directory
    var txt =  '<div id="grid">';
    for (let i = 0; i <data.length; i+=1) {
      var fullname = (data[i].name.first.substring(0,1).toUpperCase() + data[i].name.first.substring(1)) + "  " +  (data[i].name.last.substring(0,1).toUpperCase() + data[i].name.last.substring(1));
      var img = data[i].picture.large;
      var email =  data[i].email;
      var city = data[i].location.city.substring(0,1).toUpperCase()  + data[i].location.city.substring(1) ;
      var phone = data[i].phone;
      var address =  data[i].location.street + " " + data[i].location.state + " " + data[i].location.postcode;

      txt +=  '<div class="cards"  data-index=i >';
      txt += '<img src="'+ img + '" class="avatar">';
      txt +=  '<ul class="card-content">';
      txt += '<li id="name">' + fullname + '</li>';
      txt +=   '<li id="email">' + email + '</li>';
      txt +=   '<li id="city">' + city + '</li>';
      txt +=  '</ul>';
      txt += '</div>';
      }
      txt += '</div>';
    $('#directory-container').html(txt)



          /*------------MEMBER  MODAL POP-UP --------*/
$(document).on('click ',  '.cards', function(e) {
          let i = 0;
          displayModal(employees[i]);
});




  }); // end get JSON
}); //end ready
