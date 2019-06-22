var ctx = document.getElementById("mainchart").getContext("2d"); 

/*** Gradient ***/
var gradient = ctx.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');   
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
/***************/

var data = {
  labels : ["02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","00:00"],
  datasets: [
    {
      fillColor : gradient, // Put the gradient here as a fill color
      pointRadius: 10,
      bezierCurve: false,
      data : [25.0,32.4,22.2,39.4,34.2,22.0,23.2,24.1,20.0,18.4,19.1,17.4]
    }
  ]
};

var options = {
  responsive: true,
  datasetStrokeWidth : 2,
  pointDotStrokeWidth : 4,
  tooltipFillColor: "rgba(0,0,0,0.8)",
  tooltipFontStyle: "bold",
  tooltipTemplate: "<%if (label){%><%=label + ' hod' %>: <%}%><%= value + '°C' %>",
  scaleLabel : "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>"
};




var chart = new Chart(ctx)
console.log(chart)
var myLineChart = chart.Line(data, options);


// ---

const remote = require('electron').remote;
document.getElementById("close").addEventListener("click", function (e) {
  remote.getCurrentWindow().close();
}); 

// calc(decimal-floor(calc(calc(100vw - 350px) / 500px)) * 500px)

var executesetSize = () => {
  console.log('width', (Math.floor((document.body.parentElement.width - 350)/500)*500)+'px')
  document.styleSheets[0].rules[29].styleMap.set('width', (Math.floor((document.body.parentElement.offsetWidth - 350)/600)*600)+'px')
}

window.onresize = function(event) {
  executesetSize();
};
executesetSize();

screenids = [
  '350px',
  '100vw',
  'calc(200vw - 350px)',
  'calc(300vw - 700px)',
  'calc(400vw - 1050px)'
]
var switchtotab = (tabnum) => {
  Array.from(document.getElementById('bottomslab').children).forEach(child => {
    child.children[0].id = "notactivesvg"
  })
  document.getElementById('bottomslab').children[tabnum].children[0].id = "activesvg"
  document.getElementById('mainwrap').style.setProperty('--screen', screenids[tabnum])
}
document.getElementById('mainwrap').style.setProperty('--screen', '350px')

var invest = (e) => {
  console.log(e)
  toggleinvestmodal();
}

var showInvestModal = () => {
  document.getElementById('investmodal').style.opacity = "1"
  document.getElementById('investmodal').style.zIndex = "1000000"
}
var hideInvestModal = () => {
  document.getElementById('investmodal').style.opacity = "0"
  setTimeout(() => {
    document.getElementById('investmodal').style.zIndex = "-100"
  }, 100)
}

var investModalShowing = () => {
  return (document.getElementById('investmodal').style.opacity == 1)
}

var toggleinvestmodal = () => {
  if(investModalShowing()) {
    hideInvestModal()
  } else {
    showInvestModal();
  }
}

var showUser = (e) => {
  console.log(e)
  toggleusermodal();
}

var showUserModal = () => {
  document.getElementById('usermodal').style.opacity = "1"
  document.getElementById('usermodal').style.zIndex = "1000000"
}
var hideUserModal = () => {
  document.getElementById('usermodal').style.opacity = "0"
  setTimeout(() => {
    document.getElementById('usermodal').style.zIndex = "-100"
  }, 100)
}

var userModalShowing = () => {
  return (document.getElementById('usermodal').style.opacity == 1)
}

var toggleusermodal = () => {
  if(userModalShowing()) {
    hideUserModal()
  } else {
    showUserModal();
  }
}