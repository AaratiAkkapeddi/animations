
var imgs = []
var w=window,
d=document,
e=d.documentElement,
g=d.getElementsByTagName('body')[0],
width=w.innerWidth||e.clientWidth||g.clientWidth,
height=w.innerHeight||e.clientHeight||g.clientHeight;
function mapRange (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}

for (var i = 181 - 1; i >= 0; i--) {
	//Things[i]
	var imgstring = "globe_0/"+ i + ".png"
	imgs.push(imgstring)
}
var img = document.getElementById('myimg')
document.addEventListener("mousemove", function(e){
	var x = e.x;
	var y = e.y;
	x = Math.floor(mapRange(x, 0, width, 0, 181))


	img.src = imgs[x]	
	
	
});