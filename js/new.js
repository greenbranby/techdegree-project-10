$(document).ready(function () {

//VARIABLES
const modal = document.getElementById('myModal');

let selectedIndex = 0;
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
function employeeModal() {
  if (employee.name ===  data.name)
      $('#myModal').show();

//  When the user clicks on <span> (x), close the modal
$('.close').on('click',  function() {
    location.reload();  // $('#myModal').remove();
});
}
let userData2= [];
getJSONData(userData2, function(data){
        data = data.results;
        console.log(data);

      var fullbday = data.dob;
      fullbday = fullbday.substring(0, fullbday.length-8);


      for (let i = 0; i <data.length; i+=1) {
      var txt =  '<div id="myModal">';
      txt += '<div class="modal">';
      txt +=  '<div id="modal__contents">';
      txt += '<span class="close">&times;</span>';
      txt += '<img src="'+ data.picture.large + '" class="avatar">';
      txt +=  '<ul class="modal-card-content">';
      txt += '<li id="name">' + (data.name.first.substring(0,1).toUpperCase() + data.name.first.substring(1)) + "  " +
                    (data.name.last.substring(0,1).toUpperCase() + data.name.last.substring(1)) + '</li>';
      txt +=   '<li id="email">' + data.email + '</li>';
      txt +=   '<li id="city">' + data.location.city.substring(0,1).toUpperCase() + data.location.city.substring(1) + '</li>';
      txt +=  '</ul>';
      txt += '<ul class="employee-info">';
       txt += '<li id="phone">' + data.phone + ' </li>'
      txt += '<li id="address"> ' + data.location.street +" " + data.location.state + " " + data.location.postcode + ' </li>'
      txt += '<li id="birthday">' + "Birthday: "  + fullbday  +' </li>'
      txt += '<span class="arrow-right"></span>';
      txt += '<span class="arrow-left"></span';
      txt +=  '</ul>';
      txt += '</div>';
      $('#myModal').html(txt)
}
});


var rugAPI = "https://randomuser.me/api/?results=12&inc=name,email,location,cell,dob,picture&nat=US"

// ------GET THE JSON employees FROM RANDOM USER GENERATOR
let userData = [];
function getJSONData(userData, callback) {
  var data = "default";
$.getJSON(rugAPI,  userData, function(data) {
    employees = data.results;
    callback(employees);

    //----------Create Employee Directory
      var txt =  '<div id="grid">';
      for (let i = 0; i <employees.length; i+=1) {
        var fullname = (employees[i].name.first.substring(0,1).toUpperCase() + employees[i].name.first.substring(1)) + "  " +  (employees[i].name.last.substring(0,1).toUpperCase() + employees[i].name.last.substring(1));
        var img = employees[i].picture.large;
        var email =  employees[i].email;
        var city = employees[i].location.city.substring(0,1).toUpperCase()  + employees[i].location.city.substring(1) ;
        var phone = employees[i].cell;
        var address =  employees[i].location.street + " " + employees[i].location.state + " " + employees[i].location.postcode;

        txt +=  '<div class="cards"  employees-index=[i]>';
        txt += '<img src="'+ img + '" class="avatar">';
        txt +=  '<ul class="card-content">';
        txt += '<li id="name">' + fullname + '</li>';
        txt +=   '<li id="email">' + email + '</li>';
        txt +=   '<li id="city">' + city + '</li>';
        txt +=  '</ul>';
        txt += '</div>';
        }
      $('#directory-container').html(txt)

      /*------------MEMBER  MODAL POP-UP --------*/
$(document).on('click ',  '.cards', function(e) {
let i = 0;
employeeModal(data[i]);
});


}); // end get JSON
}




// let clickedCard = e.target;
// var value = Array.prototype.slice.call(clickedCard.parentElement.children).indexOf(clickedCard);
// console.log(value);
// openModal(value);
// employeeModa();

}); //end ready
