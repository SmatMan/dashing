var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getTime() {
    var d = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    document.getElementById("timeJS").innerHTML = d;
}

function getDayOfWeek() {
    var now = new Date();
    var day = days[now.getDay()];
    console.log(day);
    document.getElementById("dayname").innerHTML = day;
}

function getDDMMYY() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = month + '\n' + day + ', ' + year;
    document.getElementById("ddmmyy").innerHTML = output;
    document.getElementById("daynamemid").innerHTML = output;
}

function middleDate() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const dayforweek = days[dateObj.getDay()];
    const output = dayforweek + ", " + month + '\n' + day + ', ' + year;
    document.getElementById("daynamemid").innerHTML = output;
}

function weather() {
    var key = "insert key here";
    fetch('https://api.openweathermap.org/data/2.5/weather?id=5950267&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        var celcius = Math.round(parseFloat(data.main.temp)-273.15);
        var conditions = data.weather[0].description
        document.getElementById('temp').innerHTML = celcius + '&deg;C';
        document.getElementById('weatherdesc').innerHTML = conditions;
    })
    .catch(e => console.log(e));
  }
  
function reloadCSS() {
var links = document.getElementsByTagName("link");

for (var x in links) {
    var link = links[x];

    if (link.getAttribute("type").indexOf("css") > -1) {
        link.href = link.href + "?id=" + new Date().getMilliseconds();
    }
}
}



  window.onload = function() {
    weather( 6167865 );   
    getDayOfWeek();
    getTime();
    getDDMMYY();
    middleDate();
    getJoke();
  }

setInterval(getTime, 1000);
setInterval(getDDMMYY(), 7200000)
setInterval(getDayOfWeek(), 7200000)
setInterval(reloadCSS, 1800000);
setInterval(weather( 6167865 ), 7200000)