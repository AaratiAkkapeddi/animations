
/* Browser height and width for diff browsers */
var w=window,
d=document,
e=d.documentElement,
g=d.getElementsByTagName('body')[0],
width=w.innerWidth||e.clientWidth||g.clientWidth,
height=w.innerHeight||e.clientHeight||g.clientHeight;

/* mapping function */
function mapRange (value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
}

var img = document.getElementById('myimg')

//Darkmode on click...

document.addEventListener("mousedown", function(e){
	img.classList.add('dark')
})

document.addEventListener("mouseup", function(e){
	img.classList.remove('dark')
})

//map mouse to correct image
document.addEventListener("mousemove", function(e){
	var x = e.x;
	var y = e.y;
	x = Math.floor(mapRange(x, 0, width, 0, 181))
    y = Math.floor(mapRange(y, height, 0, 0, 10))
    console.log(y)
    if((x >=0 && x <= 180) && (y >= 0 && y <=9)){
    	img.src = "cube_"+y+"/"+x+".png"		
    }
});