$(document).ready(function () {

//VARIABLES
const modal = document.getElementById('myModal');
const search = document.getElementById('search');

  let employees= [];

// let selectedIndex = 0;
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
function memberModal(employees){
  $('#myModal').show(); // Open the modal

      let i = 0;
      let fullbday = employees.dob;
      fullbday = fullbday.substring(0, fullbday.length-8);

      let txt =  '<div id="myModal" >';
      txt += '<div class="modal"  data-index="' + i + '">';
      txt +=  '<div id="modal__contents"  >';
      txt += '<span class="close" aria-label="close">&times;</span>';
      txt += '<img src="'+ employees.picture.large + '" class="avatar">';
      txt +=  '<ul class="modal-card-content">';
      txt += '<li id="name">' + (employees.name.first.substring(0,1).toUpperCase() + employees.name.first.substring(1)) + "  " +
                    (employees.name.last.substring(0,1).toUpperCase() + employees.name.last.substring(1)) + '</li>';
      txt +=   '<li id="email">' + employees.email + '</li>';
      txt +=   '<li id="city">' + employees.location.city.substring(0,1).toUpperCase() + employees.location.city.substring(1) + '</li>';
      txt +=  '</ul>';
      txt += '<ul class="employee-info">';
       txt += '<li id="phone">' + employees.cell + ' </li>'
      txt += '<li id="address"> ' + employees.location.street +" " + employees.location.state + " " + employees.location.postcode + ' </li>'
      txt += '<li id="birthday">' + "Birthday: "  + fullbday  +' </li>'
      txt += '<span class="arrow-right"></span>';
      txt += '<span class="arrow-left" ></span';
      txt +=  '</ul>';
      txt += '</div>';
      $('#myModal').html(txt)

      //  When the user clicks on <span> (x), close the modal
    $('.close').on('click',  function(e) {
          $('#myModal').hide();
    });
}

// Event Listener for modal window clicks
$(document).on('click ',  '.arrow-right', function() {
    var i = $('.arrow-right').index(this);

    memberModal(employees[i + 1]);
});


// ------GET THE JSON names FROM RANDOM USER GENERATOR

var rugAPI = "https://randomuser.me/api/?results=12&nat=US&inc=name,email,location,cell,dob,picture"
$.getJSON(rugAPI,  function(data) {
    var data = data.results;
    employees = data;

  // ----------Create Member Directory

    var txt =  '<div id="grid">';
    for (let i = 0; i <data.length; i+=1) {
        var fullname = (data[i].name.first.substring(0,1).toUpperCase() + data[i].name.first.substring(1)) + "  " +  (data[i].name.last.substring(0,1).toUpperCase() + data[i].name.last.substring(1));
        var   img = data[i].picture.large;
        var   email =  data[i].email;
        var  city = data[i].location.city.substring(0,1).toUpperCase()  + data[i].location.city.substring(1) ;
        var  phone = data[i].cell;
        var   address =  data[i].location.street + " " + data[i].location.state + " " + data[i].location.postcode;

        txt +=  '<div class="cards" data-index="' + i + '">';
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
            var i = $('.cards').index(this);
            // Get the index of the clicked member
            memberModal(employees[i]);
        }); // end Modal Open

        // Search function
        $("#search").keyup(function(){
            var value = $(this).val().toUpperCase();
            $(".cards").filter(function(){
            ($(this).toggle($(this).text().toUpperCase().indexOf(value) > -1))
            });
        }); // End Search Function



  }); // end get JSON
}); //end ready
