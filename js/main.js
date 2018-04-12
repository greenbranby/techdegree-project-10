$(document).ready(function () {

//VARIABLES
const modal = document.getElementById('myModal');
const search = document.getElementById('search');

let employees= [];
let selectedIndex = 0;



function memberModal(i){
 selectedIndex = employees.indexOf(i);

 // Open the modal
      // let employee = employees[index];
      let fullbday = i.dob;
      fullbday = fullbday.substring(0, fullbday.length-8);

      $('#myModal').show();


      let txt =  '<div id="myModal" >';
      txt += '<div class="modal">';
      txt +=  '<div id="modal__contents"  >';
      txt += '<span class="close" aria-label="close">&times;</span>';
      txt += '<img src="'+ i.picture.large + '" class="avatar">';
      txt +=  '<ul class="modal-card-content">';
      txt += '<li id="name">' + (i.name.first.substring(0,1).toUpperCase() + i.name.first.substring(1)) + "  " +
                    (i.name.last.substring(0,1).toUpperCase() + i.name.last.substring(1)) + '</li>';
      txt +=   '<li id="email">' + i.email + '</li>';
      txt +=   '<li id="city">' + i.location.city.substring(0,1).toUpperCase() + i.location.city.substring(1) + '</li>';
      txt +=  '</ul>';
      txt += '<ul class="employee-info">';
       txt += '<li id="phone">' + i.cell + ' </li>'
      txt += '<li id="address"> ' + i.location.street +" " + i.location.state + " " + i.location.postcode + ' </li>'
      txt += '<li id="birthday">' + "Birthday: "  + fullbday  +' </li>'
      txt += '<span class="arrow-right"  data-index="' + i + '" ></span>';
      txt += '<span class="arrow-left" ></span';
      txt +=  '</ul>';
      txt += '</div>';
      $('#myModal').html(txt)

      //  When the user clicks on <span> (x), close the modal
    $('.close').on('click',  function(e) {
          $('#myModal').hide();
    });
}


// Event Listeners for modal window clicks
$(document).on('click ', '.arrow-left', function(e) {
if (selectedIndex === 0) {
          return memberModal(employees[employees.length - 1]);
      }
          return memberModal(employees[selectedIndex - 1]);
      });  // End

    $(document).on('click ', '.arrow-right', function(e) {
        if (selectedIndex === employees.length - 1) {
              return memberModal(employees[0]);
      }
              return memberModal(employees[selectedIndex + 1]);
  }); // End



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

        /*------------MEMBER  MODAL POP-UP --------*/

    $(document).on('click ',  '.cards', function(e) {
        var i = $('.cards').index(this);
        // console.log(indexNumber);
        //Get the index of the clicked member
        memberModal(employees[i]);

    }); // end Modal Open


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






  // Search function
  $("#search").keyup(function(){
      var value = $(this).val().toUpperCase();
      $(".cards").filter(function(){
      ($(this).toggle($(this).text().toUpperCase().indexOf(value) > -1))
      });
  }); // End Search Function



  }); // end get JSON
}); //end ready
