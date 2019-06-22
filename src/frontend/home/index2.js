const openURL = require('open');

var formatChart = (chart, postID) => {
  var ctx = chart.getContext("2d"); 
  var myChart = new ChartModern(ctx, {
    type: 'line',
    data: {
        labels: ['8:20 PM', '8:30 PM', '8:40 PM', '8:50 PM', '9:00 PM', '9:10 PM'],
        datasets: [{
            label: '# of Votes',
            data: [-90, -67, -28, 2, 18, 48],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 255, 1)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: false
    }
});
}

var formatPieChart = (chart, postID) => {
  var ctx = chart.getContext("2d"); 
  var myChart = new ChartModern(ctx, {
    type: 'pie',
    data:  {
      datasets: [{
        backgroundColor: [
          'rgba(255,0,0,1)',
          'rgba(0,255,0,1)',
          'rgba(0,0,255,1)'
        ],
        data: [10, 20, 30]
      }],
      
      labels: [
        'u/User3',
        'u/User2',
        'u/User1'
      ]
    },
      options: {
          responsive: false
      }
  });
}