// JavaScript Document

function changeBG(){
	const images = [
		'url("frontpage.jpg")',
		'url("Countries/South-East Asia/Indonesia/Bali/balibanner.jpg")',
		'url("Countries/South-East Asia/Thailand/Chiang Mai/chiangmaibanner.jpg")',
		'url("Countries/Portugal/Porto/portobanner.jpg")',
		'url("Countries/Stockholm/sweden_banner.jpg")',
		'url("Countries/France/Paris/parisbanner.jpg")',
		'url("Countries/South-East Asia/Singapore/singaporebanner.jpg")',
		'url("Countries/Portugal/Faial/faialbanner.jpg")',
		'url("Countries/Malta/maltabanner.jpg")',
		'url("Countries/Luxembourg/Luxembourg/luxembourgbanner.jpg")',
		'url("Countries/Ireland/Wicklow Mountains/wicklowbanner.jpg")',
		'url("Countries/South-East Asia/Thailand/Bangkok/bangkokbanner.jpg")',
		'url("Countries/South-East Asia/Malaysia/malaysiabanner.jpg")',
		'url("Countries/South-East Asia/Malaysia/Kuala Lumpur/kualalumpurbanner.jpg")',
		'url("Countries/South-East Asia/Thailand/Phuket/phuketbanner.jpg")',
		'url("Countries/Lanzarote/lanzarotebanner.jpg")',
		'url("Countries/Portugal/Sao Miguel/saomiguelbanner.jpg")',
		'url("Countries/Portugal/Flores/floresbanner.jpg")',
		'url("Countries/Portugal/Terceira/terceirabanner.jpg")',
		'url("Countries/Portugal/Lisbon/lisboa_banner.jpg")',
		'url("Countries/France/Monaco/monacobanner.jpg")',
		'url("Countries/France/Nice/nicebanner.jpg")',
		'url("Countries/France/francebanner.jpg")',
		'url("Countries/Portugal/portugalbanner.jpg")',
		'url("Countries/Ireland/Dublin/dublinbanner.jpg")',
		'url("Countries/Luxembourg/Vianden/viandenbanner.jpg")',
		'url("Countries/South-East Asia/Thailand/thailandbanner.jpg")',
		'url("Countries/South-East Asia/Thailand/Ayutthaya/ayutthayabanner.jpg")'
		
	]
	
	const banner = document.getElementById('banner');
	const bg = images[Math.floor(Math.random() * images.length)];
	banner.style.backgroundImage = bg;
	
	const welcome = document.getElementById('welcome');

	if (banner.style.backgroundImage === 'url("frontpage.jpg")'){
		welcome.innerHTML = 'The most western point of Europe, Flores...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/South-East Asia/Indonesia/Bali/balibanner.jpg")'){
		welcome.innerHTML = 'The most popular island of Indonesia, Bali...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/South-East Asia/Thailand/Chiang Mai/chiangmaibanner.jpg")'){
		welcome.innerHTML = 'Chiang Mai, rice fields and elephants...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Portugal/Porto/portobanner.jpg")'){
		welcome.innerHTML = 'Best city of Portugal, Porto...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Stockholm/sweden_banner.jpg")'){
		welcome.innerHTML = 'The city on islands, Stockholm...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/France/Paris/parisbanner.jpg")'){
		welcome.innerHTML = 'City full of history, Paris...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/South-East Asia/Singapore/singaporebanner.jpg")'){
		welcome.innerHTML = 'No money, no Singapore...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Portugal/Faial/faialbanner.jpg")'){
		welcome.innerHTML = 'Check out Capelinhos on Faial Island...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Malta/maltabanner.jpg")'){
		welcome.innerHTML = 'Malta, a blend between Italy and the Middle East...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Luxembourg/Luxembourg/luxembourgbanner.jpg")'){
		welcome.innerHTML = 'Last remaining dukedom, Luxembourg...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Ireland/Wicklow Mountains/wicklowbanner.jpg")'){
		welcome.innerHTML = 'Wicklow Mountains, nature right next to the capital...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/South-East Asia/Thailand/Bangkok/bangkokbanner.jpg")'){
		welcome.innerHTML = 'Bangkok, a city that never sleeps...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/South-East Asia/Malaysia/malaysiabanner.jpg")'){
		welcome.innerHTML = 'A country of diversity, Malaysia...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/South-East Asia/Malaysia/Kuala Lumpur/kualalumpurbanner.jpg")'){
		welcome.innerHTML = 'Kuala Lumpur, home to the famous Petronas Towers...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/South-East Asia/Thailand/Phuket/phuketbanner.jpg")'){
		welcome.innerHTML = 'Phuket, famous for beatifull beaches...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Lanzarote/lanzarotebanner.jpg")'){
		welcome.innerHTML = 'Lanzarote, a heaven for surfers...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(100px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Portugal/Sao Miguel/saomiguelbanner.jpg")'){
		welcome.innerHTML = 'Green wonder of the Atlantic Ocean, Sao Miguel...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Portugal/Flores/floresbanner.jpg")'){
		welcome.innerHTML = 'Prehistoric island, with very few tourists called Flores...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Portugal/Terceira/terceirabanner.jpg")'){
		welcome.innerHTML = 'Miles of farmland, and a colorfull city in Terceira...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Portugal/Lisbon/lisboa_banner.jpg")'){
		welcome.innerHTML = 'Lisbon, home to big waves and beautifull architecture...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/France/Monaco/monacobanner.jpg")'){
		welcome.innerHTML = 'Famous for the luxurious cars and yachts, Monaco...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/France/Nice/nicebanner.jpg")'){
		welcome.innerHTML = 'Walk past the beautifull boulevard of Nice...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/France/francebanner.jpg")'){
		welcome.innerHTML = 'A country with history dating back to 843 AD, France...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Portugal/portugalbanner.jpg")'){
		welcome.innerHTML = 'Portugal, known for its incredible hospitality...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Ireland/Dublin/dublinbanner.jpg")'){
		welcome.innerHTML = 'Dublin, home to the best pubs in the word...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/Luxembourg/Vianden/viandenbanner.jpg")'){
		welcome.innerHTML = 'Vianden, known for its beautifull castle and great view...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/South-East Asia/Thailand/thailandbanner.jpg")'){
		welcome.innerHTML = 'Thailand, the country where everyone smiles...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)'
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
	if (banner.style.backgroundImage === 'url("Countries/South-East Asia/Thailand/Ayutthaya/ayutthayabanner.jpg")'){
		welcome.innerHTML = 'Ayutthaya, the old capital of Thailand...';
		welcome.style.opacity = '1';
		welcome.style.filter = 'blur(0px)';
		setTimeout(function(){
    		welcome.style.opacity = '0';
			welcome.style.filter = 'blur(10px)'
			},7700);
	}
}

setInterval(changeBG, 8000);





