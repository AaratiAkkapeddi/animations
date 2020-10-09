
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
for (var i = 90 - 1; i >= 0; i--) {
    var imgstring = "cube_0/"+ i + ".png";
    var img = document.createElement("IMG");
    img.classList.add('off')
    img.id = "cube_0-"+i;
    img.src = imgstring;
    var wrapper = document.getElementById("wrapper")
    wrapper.appendChild(img);
}
for (var i = 90 - 1; i >= 0; i--) {
    var imgstring = "cube_1/"+ i + ".png";
    var img = document.createElement("IMG");
    img.classList.add('off')
    img.id = "cube_1-"+i;
    img.src = imgstring;
    var wrapper = document.getElementById("wrapper")
    wrapper.appendChild(img);
}
for (var i = 90 - 1; i >= 0; i--) {
    var imgstring = "cube_2/"+ i + ".png";
    var img = document.createElement("IMG");
    img.classList.add('off')
    img.id = "cube_2-"+i;
    img.src = imgstring;
    var wrapper = document.getElementById("wrapper")
    wrapper.appendChild(img);
}
for (var i = 90 - 1; i >= 0; i--) {
    var imgstring = "cube_3/"+ i + ".png";
    var img = document.createElement("IMG");
    img.classList.add('off')
    img.id = "cube_3-"+i;
    img.src = imgstring;
    var wrapper = document.getElementById("wrapper")
    wrapper.appendChild(img);
}
for (var i = 90 - 1; i >= 0; i--) {
    var imgstring = "cube_4/"+ i + ".png";
    var img = document.createElement("IMG");
    img.classList.add('off')
    img.id = "cube_4-"+i;
    img.src = imgstring;
    var wrapper = document.getElementById("wrapper")
    wrapper.appendChild(img);
}
for (var i = 90 - 1; i >= 0; i--) {
    var imgstring = "cube_5/"+ i + ".png";
    var img = document.createElement("IMG");
    img.classList.add('off')
    img.id = "cube_5-"+i;
    img.src = imgstring;
    var wrapper = document.getElementById("wrapper")
    wrapper.appendChild(img);
}
for (var i = 90 - 1; i >= 0; i--) {
    var imgstring = "cube_6/"+ i + ".png";
    var img = document.createElement("IMG");
    img.classList.add('off')
    img.id = "cube_6-"+i;
    img.src = imgstring;
    var wrapper = document.getElementById("wrapper")
    wrapper.appendChild(img);
}
for (var i = 90 - 1; i >= 0; i--) {
    var imgstring = "cube_7/"+ i + ".png";
    var img = document.createElement("IMG");
    img.classList.add('off')
    img.id = "cube_7-"+i;
    img.src = imgstring;
    var wrapper = document.getElementById("wrapper")
    wrapper.appendChild(img);
}
for (var i = 90 - 1; i >= 0; i--) {
    var imgstring = "cube_8/"+ i + ".png";
    var img = document.createElement("IMG");
    img.classList.add('off')
    img.id = "cube_8-"+i;
    img.src = imgstring;
    var wrapper = document.getElementById("wrapper")
    wrapper.appendChild(img);
}
for (var i = 90 - 1; i >= 0; i--) {
    var imgstring = "cube_9/"+ i + ".png";
    var img = document.createElement("IMG");
    img.classList.add('off')
    img.id = "cube_9-"+i;
    img.src = imgstring;
    var wrapper = document.getElementById("wrapper")
    wrapper.appendChild(img);
}
//var img = document.getElementById('myimg')

// //Darkmode on click...

// document.addEventListener("mousedown", function(e){
// 	img.classList.add('dark')
// })

// document.addEventListener("mouseup", function(e){
// 	img.classList.remove('dark')
// })

//map mouse to correct image
document.addEventListener("mousemove", function(e){
	var x = e.x;
	var y = e.y;
	x = Math.floor(mapRange(x, 0, width, 0, 90))
    y = Math.floor(mapRange(y, height, 0, 0, 10))
    console.log(y)
    if((x >=0 && x <= 180) && (y >= 0 && y <=9)){
    	// img.src = "cube_"+y+"/"+x+".png"
        var imgs = document.getElementsByTagName('img')
        for (var i = imgs.length - 1; i >= 0; i--) {
            imgs[i].classList.add('off')
        }
        var img = document.getElementById("cube_"+y+"-"+x)
        img.classList.remove('off')
    }
});