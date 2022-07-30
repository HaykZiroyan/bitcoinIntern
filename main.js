function clickedpage() {
    alert("yes")
}

var xValues = [];
var yValues = [];
var yValuestwo = [];
var yValuesthree = [];
 for (let x = 0; x <= 14; x += 1) {
    xValues.push(x);
  }
generateData("60*Math.sin(x)", 0.72, 14, 0.5, yValues);
generateData("60*Math.sin(x)", 0.3, 14, 0.5, yValuestwo);
generateData("60*Math.sin(x)", -0.5, 14, 0.5, yValuesthree);

function generateData(value, i1, i2, step = 1, mek) {
  for (let x = i1; x <= i2; x += step) {
    mek.push(eval(value));
  }
}
console.log(xValues,yValues, yValuestwo, yValuesthree)


new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: yValues,
      borderColor: "#33CC99",
      fill: false
    }, { 
      data: yValuestwo,
      borderColor: "#FFCC99",
      fill: false
    }, { 
      data: yValuesthree,
      borderColor: "#336699",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});