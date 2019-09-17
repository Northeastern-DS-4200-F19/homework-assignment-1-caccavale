 // javascript
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500;  
var svgHeight = 240;
var barPadding = 10;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - d 
    })
    .attr("height", function(d) { 
        return d; 
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });

let myheading = document.querySelector('h1');
myheading.textContent = "Data science is sicko mode!"

document.querySelector('img').onclick = function() {
    alert('oof');
}

var canvas = document.querySelector("#scene");
var ctx = canvas.getContext("2d");
var HEIGHT = document.querySelector("#scene").height;
var WIDTH = document.querySelector("#scene").width;
var tickrate = 1000/60;
var curobj;
var persist = true;
var next;
var runloop;

curobj = new rain();
runloop = setTimeout(run, tickrate);

window.addEventListener("resize", function() {
    HEIGHT = document.querySelector("#scene").height;
    WIDTH = document.querySelector("#scene").width;
});

// This is not a good way to do this but it makes sense from the code
// I carved it from.  It had to change on clicks so individual timeouts
// were required.
function run() {
    if (curobj.tick(persist)) {
        runloop = setTimeout(run, tickrate);
    } else {
        persist = true;
        newfocus(next);
        runloop = setTimeout(run, tickrate);
    }
}
