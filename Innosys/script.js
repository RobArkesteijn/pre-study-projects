// JavaScript Document
//var begin_screen = document.getElementById('begin-screen');
//var enter = document.getElementById('enter');
var header1 = document.getElementById('header1');
var header2 = document.getElementById('header2');
var head = document.getElementById('head');
var headliner = document.getElementById('headliner');
/*
enter.addEventListener('click', function(){
	begin_screen.style.visibility = 'hidden';
	begin_screen.style.opacity = '0';
	header1.style.visibility = 'visible';
	header1.style.opacity = '1';
	header2.style.visibility = 'visible';
	header2.style.opacity = '1';
	headliner.style.visibility = 'visible';
	headliner.style.opacity = '1';
})*/

//Hover menu
var arrow1 = document.getElementById('arrow1');
var arrow2 = document.getElementById('arrow2');
var arrow3 = document.getElementById('arrow3');
var arrow4 = document.getElementById('arrow4');

var news = document.getElementById('news');

function hoverOverNews(){	//HoverOver
	news.style.visibility = 'visible';
	news.style.opacity = '1';
	news.style.lineHeight = '50px'; 
}

function hoverOutNews(){	//HoverOut
	news.style.visibility = 'hidden';
	news.style.opacity = '0';
	news.style.lineHeight = '0px';
}

var services = document.getElementById('services');

function hoverOverServices(){	//HoverOver
	services.style.visibility = 'visible';
	services.style.opacity = '1';
	services.style.lineHeight = '50px';
}

function hoverOutServices(){	//HoverOut
	services.style.visibility = 'hidden';
	services.style.opacity = '0';
	services.style.lineHeight = '0px';
}

var products = document.getElementById('products');

function hoverOverProducts(){	//HoverOver
	products.style.visibility = 'visible';
	products.style.opacity = '1';
	products.style.lineHeight = '50px';
}

function hoverOutProducts(){	//HoverOut
	products.style.visibility = 'hidden';
	products.style.opacity = '0';
	products.style.lineHeight = '0px';
}

var projects = document.getElementById('projects');

function hoverOverProjects(){	//HoverOver
	projects.style.visibility = 'visible';
	projects.style.opacity = '1';
	projects.style.lineHeight = '50px';
}

function hoverOutProjects(){	//HoverOut
	projects.style.visibility = 'hidden';
	projects.style.opacity = '0';
	projects.style.lineHeight = '0px';
}

//Swap Headliner
var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var picture = document.getElementById('picture');
var kop = document.getElementById('kop');
var text = document.getElementById('text');
var page = document.getElementById('page');

var arr = ["1406994892_IMG_0613.jpg", "1406993657_IMG_0146.jpg", "1406995988_IMG_0713 - kopie.jpg", "1407008081_Sirion.jpg", "1407010976_IMG_1216 - kopie.jpg", "1407010190_IMG_1081.jpg"]

var i = 0;

//Minus button
minus.addEventListener('click', function(){
	i--;
	if(i < 0){
		i = (arr.length -1);
		picture.src = arr[i];
		setTimeout(function(){
			picture.style.opacity = '1';
			picture.style.filter = 'blur(0px)';
		},100);
		picture.style.opacity = '0';
		picture.style.filter = 'blur(1px)';
	} else{
		picture.src = arr[i];
		setTimeout(function(){
			picture.style.opacity = '1';
			picture.style.filter = 'blur(0px)';
		},100);
		picture.style.opacity = '0';
		picture.style.filter = 'blur(1px)';
	}
	if(i === 0){
		kop.innerHTML = '2 x 100kWp Asynchronous machines on test rig.';
		text.innerHTML = 'One machine runs as a generator and the other as a motor. The two are connected by a battery, two newly developed motor drives and DC loop. Water cooling loop temperature can be adjusted in order to test the harshest environmental cooling conditions.';
		page.innerHTML = '<strong>1</strong>';
		setTimeout(function(){
			kop.style.opacity = '1';
			kop.style.filter = 'blur(0px)';
			text.style.opacity = '1';
			text.style.filter = 'blur(0px)';
			page.style.opacity = '1';
			page.style.filter = 'blur(0px)';
			},100);
		kop.style.opacity = '0';
		kop.style.filter = 'blur(1px)';
		text.style.opacity = '0';
		text.style.filter = 'blur(1px)';
		page.style.opacity = '0';
		page.style.filter = 'blur(1px)';
	}
	if(i === 1){
		kop.innerHTML = '120kWp high speed asynchronous motor/conventional gearbox housing';
		text.innerHTML = '60% of the gearbox content is now air! A compact, customized 1 and 2 speed gearbox is under development. This electric drive system is intended for future aerodynamic electric vehicles. Motor and inverter are water cooled.';
		page.innerHTML = '<strong>2</strong>';
		setTimeout(function(){
			kop.style.opacity = '1';
			kop.style.filter = 'blur(0px)';
			text.style.opacity = '1';
			text.style.filter = 'blur(0px)';
			page.style.opacity = '1';
			page.style.filter = 'blur(0px)';
			},100);
		kop.style.opacity = '0';
		kop.style.filter = 'blur(1px)';
		text.style.opacity = '0';
		text.style.filter = 'blur(1px)';
		page.style.opacity = '0';
		page.style.filter = 'blur(1px)';
	}
	if(i === 2){
		kop.innerHTML = '1 x 120kWp asynchronous motor with new gears inside on the real life dynamometer';
		text.innerHTML = 'The conventional gear box housing is now filled with the 1 and 2 speed gears. Gear noise and overal efficiency are tested in a real life electric vehicle drive train';
		page.innerHTML = '<strong>3</strong>';
		setTimeout(function(){
			kop.style.opacity = '1';
			kop.style.filter = 'blur(0px)';
			text.style.opacity = '1';
			text.style.filter = 'blur(0px)';
			page.style.opacity = '1';
			page.style.filter = 'blur(0px)';
			},100);
		kop.style.opacity = '0';
		kop.style.filter = 'blur(1px)';
		text.style.opacity = '0';
		text.style.filter = 'blur(1px)';
		page.style.opacity = '0';
		page.style.filter = 'blur(1px)';
	}
	if(i === 3){
		kop.innerHTML = 'A driving test bed with all InnoSys drive system components';
		text.innerHTML = 'This car is now equipped with several InnoSys Delft (ID) drive system components. In this car they will be tested on endurance, EMI, EMC. The car is equipped with the high speed asynchronous motor, the 21kW DC ready charger and the new motor drive. Final destination is the future aerodynamic car.';
		page.innerHTML = '<strong>4</strong>';
		setTimeout(function(){
			kop.style.opacity = '1';
			kop.style.filter = 'blur(0px)';
			text.style.opacity = '1';
			text.style.filter = 'blur(0px)';
			page.style.opacity = '1';
			page.style.filter = 'blur(0px)';
			},100);
		kop.style.opacity = '0';
		kop.style.filter = 'blur(1px)';
		text.style.opacity = '0';
		text.style.filter = 'blur(1px)';
		page.style.opacity = '0';
		page.style.filter = 'blur(1px)';
	}
	if(i === 4){
		kop.innerHTML = 'Domestic storage of PV energy, 10kWhr';
		text.innerHTML = 'Design and production of storage systems for PV energy. The system can absorb the PV energy during the day and inject it back into the building installation at peak usage hours. It also serves as a UPS and a booster. The battery is Li-Ion, capacities from 10kWhrs up to 1MWhr';
		page.innerHTML = '<strong>5</strong>';
		setTimeout(function(){
			kop.style.opacity = '1';
			kop.style.filter = 'blur(0px)';
			text.style.opacity = '1';
			text.style.filter = 'blur(0px)';
			page.style.opacity = '1';
			page.style.filter = 'blur(0px)';
			},100);
		kop.style.opacity = '0';
		kop.style.filter = 'blur(1px)';
		text.style.opacity = '0';
		text.style.filter = 'blur(1px)';
		page.style.opacity = '0';
		page.style.filter = 'blur(1px)';
	}
	if(i === 5){
		kop.innerHTML = 'Mobile PV installation 2kWp';
		text.innerHTML = 'Design and integration of a PV panel system, Li-Ion battery, 3-phase 230/400Vac inverter power and grid feeding capacity. The whole installation can be built up within an hour. It can boost weak networks, store 10kWhrs of energy and inject power back into the network. It is used in rural areas and events.';
		page.innerHTML = '<strong>6</strong>';
		setTimeout(function(){
			kop.style.opacity = '1';
			kop.style.filter = 'blur(0px)';
			text.style.opacity = '1';
			text.style.filter = 'blur(0px)';
			page.style.opacity = '1';
			page.style.filter = 'blur(0px)';
			},100);
		kop.style.opacity = '0';
		kop.style.filter = 'blur(1px)';
		text.style.opacity = '0';
		text.style.filter = 'blur(1px)';
		page.style.opacity = '0';
		page.style.filter = 'blur(1px)';
	}
});
//Plus button
plus.addEventListener('click', function(){
	i++;
	if(i > (arr.length - 1)){
		i = 0;
		picture.src = arr[i];
		setTimeout(function(){
			picture.style.opacity = '1';
			picture.style.filter = 'blur(0px)';
		},100);
		picture.style.opacity = '0';
		picture.style.filter = 'blur(1px)';
	} else{	
		picture.src = arr[i];
		setTimeout(function(){
			picture.style.opacity = '1';
			picture.style.filter = 'blur(0px)';
		},100);
		picture.style.opacity = '0';
		picture.style.filter = 'blur(1px)';
	}
	if(i === 0){
		kop.innerHTML = '2 x 100kWp Asynchronous machines on test rig.';
		text.innerHTML = 'One machine runs as a generator and the other as a motor. The two are connected by a battery, two newly developed motor drives and DC loop. Water cooling loop temperature can be adjusted in order to test the harshest environmental cooling conditions.';
		page.innerHTML = '<strong>1</strong>';
		setTimeout(function(){
			kop.style.opacity = '1';
			kop.style.filter = 'blur(0px)';
			text.style.opacity = '1';
			text.style.filter = 'blur(0px)';
			page.style.opacity = '1';
			page.style.filter = 'blur(0px)';
			},100);
		kop.style.opacity = '0';
		kop.style.filter = 'blur(1px)';
		text.style.opacity = '0';
		text.style.filter = 'blur(1px)';
		page.style.opacity = '0';
		page.style.filter = 'blur(1px)';
	}
	if(i === 1){
		kop.innerHTML = '120kWp high speed asynchronous motor/conventional gearbox housing';
		text.innerHTML = '60% of the gearbox content is now air! A compact, customized 1 and 2 speed gearbox is under development. This electric drive system is intended for future aerodynamic electric vehicles. Motor and inverter are water cooled.';
		page.innerHTML = '<strong>2</strong>';
		setTimeout(function(){
			kop.style.opacity = '1';
			kop.style.filter = 'blur(0px)';
			text.style.opacity = '1';
			text.style.filter = 'blur(0px)';
			page.style.opacity = '1';
			page.style.filter = 'blur(0px)';
			},100);
		kop.style.opacity = '0';
		kop.style.filter = 'blur(1px)';
		text.style.opacity = '0';
		text.style.filter = 'blur(1px)';
		page.style.opacity = '0';
		page.style.filter = 'blur(1px)';
	}
	if(i === 2){
		kop.innerHTML = '1 x 120kWp asynchronous motor with new gears inside on the real life dynamometer';
		text.innerHTML = 'The conventional gear box housing is now filled with the 1 and 2 speed gears. Gear noise and overal efficiency are tested in a real life electric vehicle drive train';
		page.innerHTML = '<strong>3</strong>';
		setTimeout(function(){
			kop.style.opacity = '1';
			kop.style.filter = 'blur(0px)';
			text.style.opacity = '1';
			text.style.filter = 'blur(0px)';
			page.style.opacity = '1';
			page.style.filter = 'blur(0px)';
			},100);
		kop.style.opacity = '0';
		kop.style.filter = 'blur(1px)';
		text.style.opacity = '0';
		text.style.filter = 'blur(1px)';
		page.style.opacity = '0';
		page.style.filter = 'blur(1px)';
	}
	if(i === 3){
		kop.innerHTML = 'A driving test bed with all InnoSys drive system components';
		text.innerHTML = 'This car is now equipped with several InnoSys Delft (ID) drive system components. In this car they will be tested on endurance, EMI, EMC. The car is equipped with the high speed asynchronous motor, the 21kW DC ready charger and the new motor drive. Final destination is the future aerodynamic car.';
		page.innerHTML = '<strong>4</strong>';
		setTimeout(function(){
			kop.style.opacity = '1';
			kop.style.filter = 'blur(0px)';
			text.style.opacity = '1';
			text.style.filter = 'blur(0px)';
			page.style.opacity = '1';
			page.style.filter = 'blur(0px)';
			},100);
		kop.style.opacity = '0';
		kop.style.filter = 'blur(1px)';
		text.style.opacity = '0';
		text.style.filter = 'blur(1px)';
		page.style.opacity = '0';
		page.style.filter = 'blur(1px)';
	}
	if(i === 4){
		kop.innerHTML = 'Domestic storage of PV energy, 10kWhr';
		text.innerHTML = 'Design and production of storage systems for PV energy. The system can absorb the PV energy during the day and inject it back into the building installation at peak usage hours. It also serves as a UPS and a booster. The battery is Li-Ion, capacities from 10kWhrs up to 1MWhr';
		page.innerHTML = '<strong>5</strong>';
		setTimeout(function(){
			kop.style.opacity = '1';
			kop.style.filter = 'blur(0px)';
			text.style.opacity = '1';
			text.style.filter = 'blur(0px)';
			page.style.opacity = '1';
			page.style.filter = 'blur(0px)';
			},100);
		kop.style.opacity = '0';
		kop.style.filter = 'blur(1px)';
		text.style.opacity = '0';
		text.style.filter = 'blur(1px)';
		page.style.opacity = '0';
		page.style.filter = 'blur(1px)';
	}
	if(i === 5){
		kop.innerHTML = 'Mobile PV installation 2kWp';
		text.innerHTML = 'Design and integration of a PV panel system, Li-Ion battery, 3-phase 230/400Vac inverter power and grid feeding capacity. The whole installation can be built up within an hour. It can boost weak networks, store 10kWhrs of energy and inject power back into the network. It is used in rural areas and events.';
		page.innerHTML = '<strong>6</strong>';
		setTimeout(function(){
			kop.style.opacity = '1';
			kop.style.filter = 'blur(0px)';
			text.style.opacity = '1';
			text.style.filter = 'blur(0px)';
			page.style.opacity = '1';
			page.style.filter = 'blur(0px)';
			},100);
		kop.style.opacity = '0';
		kop.style.filter = 'blur(1px)';
		text.style.opacity = '0';
		text.style.filter = 'blur(1px)';
		page.style.opacity = '0';
		page.style.filter = 'blur(1px)';
	}
});

var powerbutton1 = document.getElementById('powerbutton1');
var powerbutton2 = document.getElementById('powerbutton2')
var footer = document.getElementById('footer');
var body = document.getElementById('body');
var logo = document.getElementById('logo2');
var hovermenu = document.getElementsByClassName('hover-menu');

powerbutton1.addEventListener('click', function(){
	footer.style.backgroundColor = '#062B4B';
	body.style.backgroundColor = '#242424';
	body.style.color = 'white';
	header1.style.backgroundColor = 'black';
	header2.style.backgroundColor = 'black';
	logo.style.backgroundColor = 'black';
	headliner.style.backgroundColor = 'black'
	news.style.backgroundColor = 'black';
	services.style.backgroundColor = 'black';
	products.style.backgroundColor = 'black';
	projects.style.backgroundColor = 'black';
	news.style.color = 'white';
	services.style.color = 'white';
	products.style.color = 'white';
	projects.style.color = 'white';
	powerbutton1.style.backgroundColor = 'black';
	powerbutton2.style.backgroundColor = 'black';
	minus.style.backgroundColor = 'black';
	plus.style.backgroundColor = 'black';
});

powerbutton2.addEventListener('click', function(){
	footer.style.backgroundColor = '#0f5da3';
	body.style.backgroundColor = '#E1E1E1';
	body.style.color = 'black';
	header1.style.backgroundColor = 'white';
	header2.style.backgroundColor = 'white';
	logo.style.backgroundColor = 'white';
	headliner.style.backgroundColor = 'white';
	news.style.backgroundColor = 'white';
	services.style.backgroundColor = 'white';
	products.style.backgroundColor = 'white';
	projects.style.backgroundColor = 'white';
	news.style.color = 'black';
	services.style.color = 'black';
	products.style.color = 'black';
	projects.style.color = 'black';
	powerbutton1.style.backgroundColor = 'white';
	powerbutton2.style.backgroundColor = 'white';
	minus.style.backgroundColor = 'white';
	plus.style.backgroundColor = 'white';
});






