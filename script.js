var slides;
window.onload = function(){
	slides = document.getElementsByClassName('slides');
	slider();
}
var count = 0;
function slider(){
	count++;
	var ex = count-1;
	if(ex < 0){ ex = slides.length; }
	if(count == slides.length){ count = 0; }
	for(var i = 0; i < slides.length; i++){
		if(i == ex){ continue; }
		slides[i].style.display = "none";
		slides[i].classList.remove('in');
		slides[i].classList.remove('out');
	}
	slides[ex].classList.add('out');
	setTimeout(
		function(){
			slides[ex].style.display = "none";
			slides[count].style.display = "table";
			slides[count].classList.add('in');
		},
		2000
		);
	setTimeout(slider, 10000);
}