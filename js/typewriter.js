var i = 0;
var title = 'About me';
var speed = 50;
// must demo first part in safari not Chrome 
function typeWriter() {
// 	//adjust for if the user prefers reduced motion
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelector('.typewriter').innerHTML = title;
   
}
    else if (i < title.length) {
    document.querySelector('.typewriter').innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}