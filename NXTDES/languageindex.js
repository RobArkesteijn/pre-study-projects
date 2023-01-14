// JavaScript Document
var dutch = document.getElementById("neth");
var british = document.getElementById("brit");

var hdrie1 = document.getElementById("hdrie1");
var hdrie2 = document.getElementById("hdrie2");
var hdrie3 = document.getElementById("hdrie3");
var hdrie4 = document.getElementById("hdrie4");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var welcome = document.getElementById("welcome");
var info = document.getElementById("info");
var land = document.getElementById("land");
var future = document.getElementById("future");

// Swap to Dutch language
dutch.addEventListener('click', function(){
	hdrie1.innerHTML = "-OPGELET-";
	hdrie2.innerHTML = "-Wat zal de volgende bestemming zijn?-";
	hdrie3.innerHTML = "-De informatie die ik je geef-";
	hdrie4.innerHTML = "-Wat informatie over mezelf-";
	text1.innerHTML = "<strong>OP DIT MOMENT WORDT ER NOG STEEDS AAN DE WEBSITE GEWERKT, TEKST MOET NOG OP VELE PAGINA'S WORDEN BEWERKT.</strong>";
	text2.innerHTML = "Op deze website vind je vele reis bestemming die wellicht aan je voorkeuren voldoen. Van Europa tot aan Nieuw-Zeeland, er is zoveel om te ontdekken. Ook al is iedere plek in de wereld slechts een paar muiskliks bij je vandaan, er is niks hetzelfde als het ontdekken met je eigen zintuigen. De vele uitzichten, de geur, de warmte of de kou, regen, sneeuw, je noemt het maar. Geen plek in deze wereld is hetzelfde als de ander. Sommige hebben betere uitzichten, anderen beter weer, sommige zelfs beide. Dus ga de deur uit, en ontdek. Ik hoop dat ik je kan inspireren om naar een van de plekken te gaan waar je over leest op deze website.";
	text3.innerHTML = "Iedere bestemming op deze website is door mezelf bezocht, of door iemand die ik persoonlijk ken. Hierdoor zal de informatie op deze website zo betrouwbaar mogelijk zijn. Ik zal je niet vertellen dat een plek mooi is, als dat niet zo is. De foto's zijn uiteraard gemaakt op momenten waar het weer op zijn best was.";
	text4.innerHTML = "Reizen is de grootste passie die ik heb. Het moment dat ik terugkom van een vakantie, begin ik direct te fantaseren over de volgende. Vlak na dat ik 18 werd, reisde ik naar Zuid-Oost Azië voor een periode van twee en een halve maand. Ik reide helemaal op mezelf en ontmoeten fantasische mensen door de reis heen. Gedurende deze periode heb ik geleerd dat er op uit gaan de enige manier is om er achter te komen wat de wereld werkelijk te bieden heeft. Op dit moment ben ik 20 jaar oud en ik ben nog steeds erg gretig om meer van de wereld te ontdekken.";
	welcome.innerHTML = "Welkom";
	//info.innerHTML = "Reis Info"
	//land.innerHTML = "Landen"
	//future.innerHTML = "Aanstaande"
});

// Swap to English language
british.addEventListener('click', function(){
	hdrie1.innerHTML = "-WARNING-";
	hdrie2.innerHTML = "-What shall the next destination be?-";
	hdrie3.innerHTML = "-The information I give you-";
	hdrie4.innerHTML = "-Some information about myself-";
	text1.innerHTML = "<strong>AT THIS MOMENT, THIS WEBSITE IS STILL UNDER MAINTENANCE. TEXT STILL NEEDS TO  BE EDITED ON MANY WEBPAGES.</strong>";
	text2.innerHTML = "On this website you'll find many travel destinations that might suit your preferences. From Europe al the way to New Zealand, there is so much to discover. Even though every place in the world is only a few button clicks away on your computer, there is nothing like discovering it with your own senses. The views, the smell, the warmth or the cold, rain, snow.. you name it. No place in this world is the same as the other. Some have better views, others have better weather, some have both. So get out there and discover, I hope I can inspire you to go to one of the places that you'll read about on this website.";
	text3.innerHTML = "Every destination on this website has been visited by either myself (Rob) or someone I know personally. Therefore the information you'll recieve on this website will be as trustworthy as possible. I wont tell you that a place is beautifull if it isn't. The pictures that you'll see are obviously made on the moments where the weather was around its best.";
	text4.innerHTML = "Travelling is the biggest passion I have. The moment I get home after a vacation, I immediately start fantasizing about the next one. Shortly after I turned 18, I travelled to South-East Asia for a period of two and a half months. I travelled all by myself and met amazing people along the way. During this period I learned that getting out there is really the only way to learn about what the world has to offer. Right now I am 20 years old and I'm still very eager to discover more about the world.";
	welcome.innerHTML = "Welcome";
	//info.innerHTML = "Travel Info"
	//land.innerHTML = "Countries"
	//future.innerHTML = "Upcoming"
});