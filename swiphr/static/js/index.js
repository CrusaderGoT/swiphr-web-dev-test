var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Data for the chart
var data = [
    { month: "Jan", revenue: 30, orders: 20 },
    { month: "Feb", revenue: 30, orders: 30 },
    { month: "Mar", revenue: 30, orders: 35 },
    { month: "Apr", revenue: 18, orders: 18 },
    { month: "May", revenue: 50, orders: 60 },
    { month: "Jun", revenue: 60, orders: 70 },
    { month: "Jul", revenue: 30, orders: 35 },
    { month: "Aug", revenue: 38, orders: 40 },
    { month: "Sep", revenue: 55, orders: 50 },
    { month: "Oct", revenue: 50, orders: 55 },
    { month: "Nov", revenue: 19, orders: 20 },
    { month: "Dec", revenue: 43, orders: 45 }
];

// Calculate chart parameters
var numBars = data.length;
var barWidth = (canvas.width - 40) / (6 * numBars); //calculation for bar width
var spaceBetweenGroups = barWidth; // Space between groups
var spaceBetweenBars = 0; // Space between bars within a group
var chartHeight = canvas.height - 40;
var maxValue = 80; // Maximum value for revenue
var yScale = chartHeight / maxValue;

// Set label color
ctx.fillStyle = "#000000";

// Draw y-axis labels
for (var i = 0; i <= maxValue; i += 20) {
    var yPos = chartHeight - i * yScale;
    ctx.fillText(i, 10, yPos);
}

// Draw x-axis labels and bars
for (var i = 0; i < data.length; i++) {
    var xPos = 40 + (barWidth + spaceBetweenGroups) * i * 3; // Adjusted x-position calculation
    var revenueHeight = data[i].revenue * yScale;
    var ordersHeight = data[i].orders * yScale;

    // Draw revenue bar
    ctx.fillStyle = "#A946FF";
    ctx.fillRect(xPos, chartHeight - revenueHeight, barWidth, revenueHeight);

    // Draw orders bar
    ctx.fillStyle = "#E9D1FF";
    ctx.fillRect(xPos + barWidth + spaceBetweenBars, chartHeight - ordersHeight, barWidth, ordersHeight);

    // Set x-axis label color
    ctx.fillStyle = "#000000";

    // Draw x-axis label
    ctx.fillText(data[i].month, xPos + (barWidth / 2), chartHeight + 20);
}

// this for setting equal height on the 2nd section card50 elements
window.onload = function() {
    setEqualHeight();
};

function setEqualHeight() {
    let card50s = document.querySelectorAll(".card50");
    let card50Imgs = document.querySelector(".card50-imgs")
    let maxHeight = 0;
    
    // find/calculate the maximum height
    card50s.forEach(function(card) {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
    });

    //set the max height for all card50s
    card50s.forEach(function(card) {
        card.style.height = maxHeight + 'px' // in pixels
    });

    

}