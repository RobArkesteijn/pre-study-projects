// JavaScript Document
// Load screen
function changeTXT(){
	const welcome = document.getElementById('welcome');
	setTimeout(function(){
    	welcome.style.opacity = '0';
		welcome.style.filter = 'blur(10px)'
		},7600);
}

window.onload = changeTXT;

//Loading screen & play time
var loader = document.getElementById("preloader");
var myTimeout = setTimeout(loadingPage, 700);

function loadingPage(){
	loader.style.opacity = '0';
	loader.style.visibility ='hidden';
};

//Mobile Screen side-menu
let plus = document.getElementById('plus');
let menu = document.getElementById('side-menu');
let min = document.getElementById('min');
let foreground = document.getElementById('foreground');
let logo2 = document.getElementById('logo2')

//Side-menu appears onclick
plus.addEventListener('click', function(){
	menu.style.width = '70%';
	menu.style.visibility = 'visible';
	menu.style.opacity = '100%';
	plus.style.visibility = 'hidden';
	plus.style.opacity = '0';
	foreground.style.width = '30%';
	foreground.style.marginLeft = '70%';
	foreground.style.visibility = 'visible';
	foreground.style.opacity = '1';
	logo2.style.width = '70%';
})

//Side-menu dissappears onclick
min.addEventListener('click', function(){
	menu.style.width = '0%';
	menu.style.visibility = 'hidden';
	menu.style.opacity = '0';
	plus.style.visibility = 'visible';
	plus.style.opacity = '100%';
	foreground.style.width = '100%';
	foreground.style.marginLeft = '0%';
	foreground.style.visibility = 'hidden';
	foreground.style.opacity = '0';
	logo2.style.width = '0';
	closeT();
	closeC();
	closeUD();
})

//Open menu up further
let arrow1 = document.getElementById('arrow1');
let travellist1 = document.getElementById('travel-list1');
let head1 = document.getElementById('head1');

function openT(){
	arrow1.style.transform = 'rotate(180deg)';
	arrow1.style.opacity = '1';
	travellist1.style.visibility = 'visible';
	travellist1.style.lineHeight = '50px';
	travellist1.style.opacity = '1';
}

function closeT(){
	arrow1.style.transform = 'rotate(0deg)';
	arrow1.style.opacity = '50%';
	travellist1.style.visibility = 'hidden';
	travellist1.style.lineHeight = '0px';
	travellist1.style.opacity = '0';
}

function SideMenuT(){
	if (travellist1.style.visibility === 'visible'){
		return closeT();
	}
		return openT();
}

let arrow2 = document.getElementById('arrow2');
let travellist2 = document.getElementById('travel-list2');
let head2 = document.getElementById('head2');

function openC(){
	arrow2.style.transform = 'rotate(180deg)';
	arrow2.style.opacity = '1';
	travellist2.style.visibility = 'visible';
	travellist2.style.lineHeight = '50px';
	travellist2.style.opacity = '1';
}

function closeC(){
	arrow2.style.transform = 'rotate(0deg)';
	arrow2.style.opacity = '50%';
	travellist2.style.visibility = 'hidden';
	travellist2.style.lineHeight = '0px';
	travellist2.style.opacity = '0';
	closeFrance();
	closeIndo();
	closeIre();
	closeMal();
	closeMalta();
	closeLux();
	closePort();
	closeSp();
	closeSwe();
	closeTh();
}

function SideMenuC(){
	if (travellist2.style.visibility === 'visible'){
		return closeC();
	}
		return openC();
}

let arrow3 = document.getElementById('arrow3');
let travellist3 = document.getElementById('travel-list3');
let head3 = document.getElementById('head3');

function openUD(){
	arrow3.style.transform = 'rotate(180deg)';
	arrow3.style.opacity = '1';
	travellist3.style.visibility = 'visible';
	travellist3.style.lineHeight = '50px';
	travellist3.style.opacity = '1';
}

function closeUD(){
	arrow3.style.transform = 'rotate(0deg)';
	arrow3.style.opacity = '50%';
	travellist3.style.visibility = 'hidden';
	travellist3.style.lineHeight = '0px';
	travellist3.style.opacity = '0';
}

function SideMenuUD(){
	if (travellist3.style.visibility === 'visible'){
		return closeUD();
	}
		return openUD();
}

// Open up country menu
// France
let france_drop = document.getElementById('france-drop');
let s_arrow1 = document.getElementById('s-arrow1');
let sidehead1 = document.getElementById('sidehead1')

function openFrance(){
	s_arrow1.style.transform = 'rotate(180deg)';
	s_arrow1.style.opacity = '1';
	france_drop.style.visibility = 'visible';
	france_drop.style.lineHeight = '40px';
	france_drop.style.opacity = '1';
}

function closeFrance(){
	s_arrow1.style.transform = 'rotate(0deg)';
	s_arrow1.style.opacity = '50%';
	france_drop.style.visibility = 'hidden';
	france_drop.style.lineHeight = '0px';
	france_drop.style.opacity = '0';
}

function SideMenuFr(){
	if (france_drop.style.visibility === 'visible'){
		return closeFrance();
	}
		return openFrance();
}

// Indonesia
let indo_drop = document.getElementById('indo-drop');
let s_arrow2 = document.getElementById('s-arrow2');
let sidehead2 = document.getElementById('sidehead2')

function openIndo(){
	s_arrow2.style.transform = 'rotate(180deg)';
	s_arrow2.style.opacity = '1';
	indo_drop.style.visibility = 'visible';
	indo_drop.style.lineHeight = '40px';
	indo_drop.style.opacity = '1';
}

function closeIndo(){
	s_arrow2.style.transform = 'rotate(0deg)';
	s_arrow2.style.opacity = '50%';
	indo_drop.style.visibility = 'hidden';
	indo_drop.style.lineHeight = '0px';
	indo_drop.style.opacity = '0';
}

function SideMenuIn(){
	if (indo_drop.style.visibility === 'visible'){
		return closeIndo();
	}
		return openIndo();
}

// Ireland
let ire_drop = document.getElementById('ire-drop');
let s_arrow3 = document.getElementById('s-arrow3');
let sidehead3 = document.getElementById('sidehead3')

function openIre(){
	s_arrow3.style.transform = 'rotate(180deg)';
	s_arrow3.style.opacity = '1';
	ire_drop.style.visibility = 'visible';
	ire_drop.style.lineHeight = '40px';
	ire_drop.style.opacity = '1';
}

function closeIre(){
	s_arrow3.style.transform = 'rotate(0deg)';
	s_arrow3.style.opacity = '50%';
	ire_drop.style.visibility = 'hidden';
	ire_drop.style.lineHeight = '0px';
	ire_drop.style.opacity = '0';
}

function SideMenuIr(){
	if (ire_drop.style.visibility === 'visible'){
		return closeIre();
	}
		return openIre();
}

// Luxembourg
let lux_drop = document.getElementById('lux-drop');
let s_arrow4 = document.getElementById('s-arrow4');
let sidehead4 = document.getElementById('sidehead4')

function openLux(){
	s_arrow4.style.transform = 'rotate(180deg)';
	s_arrow4.style.opacity = '1';
	lux_drop.style.visibility = 'visible';
	lux_drop.style.lineHeight = '40px';
	lux_drop.style.opacity = '1';
}

function closeLux(){
	s_arrow4.style.transform = 'rotate(0deg)';
	s_arrow4.style.opacity = '50%';
	lux_drop.style.visibility = 'hidden';
	lux_drop.style.lineHeight = '0px';
	lux_drop.style.opacity = '0';
}

function SideMenuLu(){
	if (lux_drop.style.visibility === 'visible'){
		return closeLux();
	}
		return openLux();
}

// Malaysia
let mal_drop = document.getElementById('mal-drop');
let s_arrow5 = document.getElementById('s-arrow5');
let sidehead5 = document.getElementById('sidehead5')

function openMal(){
	s_arrow5.style.transform = 'rotate(180deg)';
	s_arrow5.style.opacity = '1';
	mal_drop.style.visibility = 'visible';
	mal_drop.style.lineHeight = '40px';
	mal_drop.style.opacity = '1';
}

function closeMal(){
	s_arrow5.style.transform = 'rotate(0deg)';
	s_arrow5.style.opacity = '50%';
	mal_drop.style.visibility = 'hidden';
	mal_drop.style.lineHeight = '0px';
	mal_drop.style.opacity = '0';
}

function SideMenuMa(){
	if (mal_drop.style.visibility === 'visible'){
		return closeMal();
	}
		return openMal();
}


// Malta
let malta_drop = document.getElementById('malta-drop');
let s_arrow6 = document.getElementById('s-arrow6');
let sidehead6 = document.getElementById('sidehead6')

function openMalta(){
	s_arrow6.style.transform = 'rotate(180deg)';
	s_arrow6.style.opacity = '1';
	malta_drop.style.visibility = 'visible';
	malta_drop.style.lineHeight = '40px';
	malta_drop.style.opacity = '1';
}

function closeMalta(){
	s_arrow6.style.transform = 'rotate(0deg)';
	s_arrow6.style.opacity = '50%';
	malta_drop.style.visibility = 'hidden';
	malta_drop.style.lineHeight = '0px';
	malta_drop.style.opacity = '0';
}

function SideMenuMalta(){
	if (malta_drop.style.visibility === 'visible'){
		return closeMalta();
	}
		return openMalta();
}

// Portugal
let port_drop = document.getElementById('port-drop');
let s_arrow7 = document.getElementById('s-arrow7');
let sidehead7 = document.getElementById('sidehead7')

function openPort(){
	s_arrow7.style.transform = 'rotate(180deg)';
	s_arrow7.style.opacity = '1';
	port_drop.style.visibility = 'visible';
	port_drop.style.lineHeight = '40px';
	port_drop.style.opacity = '1';
}

function closePort(){
	s_arrow7.style.transform = 'rotate(0deg)';
	s_arrow7.style.opacity = '50%';
	port_drop.style.visibility = 'hidden';
	port_drop.style.lineHeight = '0px';
	port_drop.style.opacity = '0';
}

function SideMenuPo(){
	if (port_drop.style.visibility === 'visible'){
		return closePort();
	}
		return openPort();
}

// Spain
let sp_drop = document.getElementById('sp-drop');
let s_arrow8 = document.getElementById('s-arrow8');
let sidehead8 = document.getElementById('sidehead8')

function openSp(){
	s_arrow8.style.transform = 'rotate(180deg)';
	s_arrow8.style.opacity = '1';
	sp_drop.style.visibility = 'visible';
	sp_drop.style.lineHeight = '40px';
	sp_drop.style.opacity = '1';
}

function closeSp(){
	s_arrow8.style.transform = 'rotate(0deg)';
	s_arrow8.style.opacity = '50%';
	sp_drop.style.visibility = 'hidden';
	sp_drop.style.lineHeight = '0px';
	sp_drop.style.opacity = '0';
}

function SideMenuSp(){
	if (sp_drop.style.visibility === 'visible'){
		return closeSp();
	}
		return openSp();
}

// Sweden
let swe_drop = document.getElementById('swe-drop');
let s_arrow9 = document.getElementById('s-arrow9');
let sidehead9 = document.getElementById('sidehead9')

function openSwe(){
	s_arrow9.style.transform = 'rotate(180deg)';
	s_arrow9.style.opacity = '1';
	swe_drop.style.visibility = 'visible';
	swe_drop.style.lineHeight = '40px';
	swe_drop.style.opacity = '1';
}

function closeSwe(){
	s_arrow9.style.transform = 'rotate(0deg)';
	s_arrow9.style.opacity = '50%';
	swe_drop.style.visibility = 'hidden';
	swe_drop.style.lineHeight = '0px';
	swe_drop.style.opacity = '0';
}

function SideMenuSw(){
	if (swe_drop.style.visibility === 'visible'){
		return closeSwe();
	}
		return openSwe();
}

// Sweden
let thai_drop = document.getElementById('thai-drop');
let s_arrow10 = document.getElementById('s-arrow10');
let sidehead10 = document.getElementById('sidehead10')

function openTh(){
	s_arrow10.style.transform = 'rotate(180deg)';
	s_arrow10.style.opacity = '1';
	thai_drop.style.visibility = 'visible';
	thai_drop.style.lineHeight = '40px';
	thai_drop.style.opacity = '1';
}

function closeTh(){
	s_arrow10.style.transform = 'rotate(0deg)';
	s_arrow10.style.opacity = '50%';
	thai_drop.style.visibility = 'hidden';
	thai_drop.style.lineHeight = '0px';
	thai_drop.style.opacity = '0';
}

function SideMenuTh(){
	if (thai_drop.style.visibility === 'visible'){
		return closeTh();
	}
		return openTh();
}

//Swap Light
var moon = document.getElementById('moon');
var sun = document.getElementById('sun');
var readpage = document.getElementById('readpage');

moon.addEventListener('click', function(){
	moon.style.visibility = 'hidden';
	moon.style.opacity = '0';
	sun.style.visibility = 'visible';
	sun.style.opacity = '1';
	readpage.style.background = 'black';
	readpage.style.color = 'white';
});






