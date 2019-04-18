var i = 0;
var title = 'About me';
var speed = 50;

// must demo first part in safari not Chrome 
function typeWriter() {
// 	//adjust for if the user prefers reduced motion
	console.log("typewriter")
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelector('.typewriter').innerHTML = title;
   
}
    else if (i < title.length) {
    document.querySelector('.typewriter').innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function weatherBalloon( cityID ) {
  var key = '4d2453f3e759e62791f60c330479bb71';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    // console.log(data);
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}	

function drawWeather( d ) {
var celcius = Math.round(parseFloat(d.main.temp)-273.15);
var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
var flipCardReduce = document.getElementById('flip-card-reduce');
var flipCardReduceStyle = flipCardReduce.currentStyle || window.getComputedStyle(flipCardReduce);
document.getElementById('temp').innerHTML = celcius + '&deg;' + 'C';
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    flipCardReduce.style.display = 'block';
    flipCardReduce.innerHTML = 'Teotihuacan ' + celcius + '&deg;' + 'C';
    flipCardReduce.style.gridColumn = '2/3';
    flipCardReduce.style.gridRow = '5/6';
    console.log(flipCardReduce);
  }
}


typeWriter();
weatherBalloon( 3996063 );
