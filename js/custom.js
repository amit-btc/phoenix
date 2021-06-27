google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Team',      5000000],
    ['Public',  495000000],
  ]);

  var options = {
    title: 'Total Supply: 500,000,000 Phoenix',
    pieSliceTextStyle: {
      color: '#fff',
    },
    titleTextStyle:{color: 'white', fontSize: 16},
    color:"#fff",
    backgroundColor:"#0a1c25",
    slices: {
      0: { color: '#E69D51' },
      1: { color: '#0892D0' },
      1: { color: '#8D6298' },
      2: { color: '#59975C' },
    },
    legend:{ textStyle: {color: 'white', fontSize: 16}}
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

// (function () {
//   const second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 24;

//   let birthday = "June 27, 2021 13:00:00",
//       countDown = new Date(birthday).getTime(),
//       x = setInterval(function() {    

//         let now = new Date().getTime(),
//             distance = countDown - now;

//         document.getElementById("days").innerText = Math.floor(distance / (day)),
//           document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//           document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//           document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

//         //seconds
//       }, 0)
//   }());