


//




// Line Chart
var ctx = document.getElementById("myLineChart").getContext('2d');
var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["0","16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            datasets: [{
                label: [],
                data: [0, 500, 1000, 850,1300, 1700, 1300, 1500, 1000, 1500, 2000, 1500, 2000, 2500],
                fill: true,
                backgroundColor: ['rgba(115,119,191, .25)'],
                borderColor: ['rgba(115,119,191, 1)'],
                lineTension: 0,
                pointBackgroundColor: 'white',
                pointBorderWidth: 2,
                fill: 'origin',
                radius: 6,
                tension: 0,
              }],
          },
          options: {
            legend: { display: false },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
          }
        });


      // BAR CHART
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["S", "M", "T", "W", "T", "F", "S"],
          datasets: [{
              label: '# of Votes',
              data: [50, 75, 150, 100, 200, 180, 75, 250],
              backgroundColor: [
                  'rgb(115,119,191)',
                  'rgb(115,119,191)',
                  'rgb(115,119,191)',
                    'rgb(115,119,191)',
                  'rgb(115,119,191)',
                  'rgb(115,119,191)',
                    'rgb(115,119,191)'
              ],

              borderWidth: 1
          }]
        },
        options: {
           legend: { display: false },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
        }
        });



      //DONUT CHART

      var ctx = document.getElementById("myDoughnutChart");
      var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels:  [ "Phones","Tablets","Desktop"],
            data: [10, 20, 30],
              datasets:[
                {"label":"My First Dataset",
                  data:[15,15,75],
                  backgroundColor: [
                      'rgb(116,177,191)',
                      "rgb(129,201,143)",
                      'rgb(115,119,191)'
                    ],
                    borderColor: [
                        'rgb(116,177,191)',
                        "rgb(129,201,143)",
                        'rgb(115,119,191)'
                      ],
                }
              ]
              },
        options:  {
          legend: {
            display: true,
            position:'right',
            labels: {
                boxWidth: 25,
                padding: 20,
              }
                          }
                        }
          });


/*-------------MODAL POP-UP --------*/
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
