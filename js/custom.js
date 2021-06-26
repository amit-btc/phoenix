google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Presale Sale',     60000000],
    ['Team',      5000000],
    ['Public',  435000000],
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
