// JavaScript Document

//Aanpassing scherm na openen tijdlijn
var header = document.getElementById('header');
var title = document.getElementById('title');
var sidehovermenu = document.getElementById('sidehovermenu');
var main = document.getElementById('main');
var jaartal = document.getElementById('jaartal');
var footer = document.getElementById('footer');
var dutchcities = document.getElementById('dutchcities');

sidehovermenu.addEventListener('mouseover', function(){
	sidehovermenu.style.opacity = '1';
	sidehovermenu.style.marginLeft = '0';
	header.style.marginLeft = '15vw';
	title.style.fontSize = '11.9vh';
	title.style.marginRight = '15vw';
	main.style.marginLeft = '15vw';
	main.style.width = '85vw';
	jaartal.style.fontSize = '5.1vh';
	footer.style.marginLeft = '15vw';
	footer.style.width = '85vw';
	dutchcities.style.fontSize = '2.125vh';
});

sidehovermenu.addEventListener('mouseout', function(){
	sidehovermenu.style.opacity = '0';
	sidehovermenu.style.marginLeft = '-15vw';
	header.style.marginLeft = '0';
	title.style.fontSize = '14vh';
	title.style.marginRight = '0';
	main.style.marginLeft = '0';
	main.style.width = '100%';
	jaartal.style.fontSize = '6vh';
	footer.style.marginLeft = '0';
	footer.style.width = '100%';
	dutchcities.style.fontSize = '2.5vh';
});


//Omschakelen tussen Plaatsen
var nederland = document.getElementById('nederland');
var amsterdam = document.getElementById('amsterdam');
var haarlem = document.getElementById('haarlem');
var leiden = document.getElementById('leiden');
var delft = document.getElementById('delft');
var utrecht = document.getElementById('utrecht');

nederland.addEventListener('click', function(){
	title.innerHTML = 'De Geschiedenis van Nederland';
});
amsterdam.addEventListener('click', function(){
	title.innerHTML = 'De Geschiedenis van Amsterdam';
});
haarlem.addEventListener('click', function(){
	title.innerHTML = 'De Geschiedenis van Haarlem';
});
leiden.addEventListener('click', function(){
	title.innerHTML = 'De Geschiedenis van Leiden';
});
delft.addEventListener('click', function(){
	title.innerHTML = 'De Geschiedenis van Delft';
});
utrecht.addEventListener('click', function(){
	title.innerHTML = 'De Geschiedenis van Utrecht';
});

//Veranderen van Jaartal
var vth = document.getElementById('vth');
var vthv = document.getElementById('vthv');
var zth = document.getElementById('zth');
var zthv = document.getElementById('zthv');
var zvth = document.getElementById('zvth');
var zvthv = document.getElementById('zvthv');
var ath = document.getElementById('ath');
var athv = document.getElementById('athv');
var nth = document.getElementById('nth');
var nthv = document.getElementById('nthv');
var td = document.getElementById('td');


vth.addEventListener('click', function(){
	jaartal.innerHTML = '1500';
});
vthv.addEventListener('click', function(){
	jaartal.innerHTML = '1550';
});
zth.addEventListener('click', function(){
	jaartal.innerHTML = '1600';
});
zthv.addEventListener('click', function(){
	jaartal.innerHTML= '1650';
});
zvth.addEventListener('click', function(){
	jaartal.innerHTML = '1700';
});
zvthv.addEventListener('click', function(){
	jaartal.innerHTML = '1750';
});
ath.addEventListener('click', function(){
	jaartal.innerHTML = '1800';
});
athv.addEventListener('click', function(){
	jaartal.innerHTML = '1850';
});
nth.addEventListener('click', function(){
	jaartal.innerHTML = '1900';
});
nthv.addEventListener('click', function(){
	jaartal.innerHTML = '1950';
});
td.addEventListener('click', function(){
	jaartal.innerHTML = '2000';
});


var light = document.getElementById('light');
var dark  = document.getElementById('dark');

light.addEventListener('click', function(){
	header.style.backgroundColor = 'white';
	title.style.color = 'black';
	main.style.backgroundColor = 'white';
	main.style.color = 'black';
	main.style.borderTop = 'solid 2px black';
	sidehovermenu.style.backgroundColor = 'white';
	sidehovermenu.style.color = 'black';
	sidehovermenu.style.borderRight = 'solid 2px black';
	footer.style.backgroundColor = 'white';
	footer.style.color = 'black';
	footer.style.borderTop = 'solid 2px black';
	light.style.border = 'solid 2px black';
	dark.style.border = 'solid 2px black';
});

dark.addEventListener('click', function(){
	header.style.backgroundColor = 'black';
	title.style.color = 'white';
	main.style.backgroundColor = 'black';
	main.style.color = 'white';
	main.style.borderTop = 'solid 2px white';
	sidehovermenu.style.backgroundColor = 'black';
	sidehovermenu.style.color = 'white';
	sidehovermenu.style.borderRight = 'solid 2px white';
	footer.style.backgroundColor = 'black';
	footer.style.color = 'white';
	footer.style.borderTop = 'solid 2px white';
	light.style.border = 'solid 2px white';
	dark.style.border = 'solid 2px white';
})




