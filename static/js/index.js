var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getTime() {
    
    var d = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    document.getElementById("timeJS").innerHTML = d;
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

function timeOfDay() {
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
        document.getElementById("timeofdaytext").innerHTML = "Good Morning.";
    } else if (curHr < 18) {
        document.getElementById("timeofdaytext").innerHTML = "Good Afternoon.";
    } else {
        document.getElementById("timeofdaytext").innerHTML = "Good Evening.";
}
}

function weather( key ) {
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

  function lastfm( key ) {
    fetch('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=imsmatman&api_key=' + key + '&format=json')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data)
        var songtitle = data.recenttracks.track[0].name
        var artist = data.recenttracks.track[0].artist["#text"]
        var albumcover = data.recenttracks.track[0].image[2]["#text"]
        try {
            if (data.recenttracks.track[0]["@attr"].nowplaying = "true") {
                document.getElementById('play-pause').src="static/icons/playing_icon.gif";
                document.getElementById('song-title').innerHTML = songtitle;
                document.getElementById('artist-name').innerHTML = artist;
                document.getElementById('spotify-gradient').style.backgroundImage="linear-gradient(rgba(31, 156, 6, 0.9), rgba(0, 0, 0, 0.9)), url('" + albumcover + "')";
            } 
        } catch (e){
                document.getElementById('play-pause').src="static/icons/paused.png";
                document.getElementById('song-title').innerHTML = songtitle;
                document.getElementById('artist-name').innerHTML = artist;
                document.getElementById('spotify-gradient').style.backgroundImage="linear-gradient(rgba(31, 156, 6, 0.9), rgba(0, 0, 0, 0.9)), url('" + albumcover + "')";
            }
        
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

