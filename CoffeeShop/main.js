// JavaScript Document

var left_header = document.getElementById('left-header');
var right_header = document.getElementById('right-header');
var menu_icon = document.getElementById('menu-icon');
var menu_list = document.getElementById('menu-list');
var contact_icon = document.getElementById('contact-icon');
var menu_cancel = document.getElementById('menu-cancel');

menu_icon.addEventListener('click', function(){
	menu_icon.style.visibility = 'hidden';
	menu_icon.style.opacity = '0';
	menu_list.style.visibility = 'visible';
	menu_list.style.opacity = '1';
	left_header.style.borderLeft = 'solid 110vh #2B0F0E';
	right_header.style.borderLeft = 'solid 110vh #2B0F0E';
	left_header.style.borderRight = 'solid 0 transparent';
	right_header.style.borderRight = 'solid 0 transparent';
	contact_icon.style.visibility = 'hidden';
	contact_icon.style.opacity = '0';
	menu_cancel.style.visibility = 'visible';
	menu_cancel.style.opacity = '1';
});

menu_cancel.addEventListener('click', function(){
	menu_icon.style.visibility = 'visible';
	menu_icon.style.opacity = '1';
	menu_list.style.visibility = 'hidden';
	menu_list.style.opacity = '0';
	left_header.style.borderLeft = 'solid 50vh #2B0F0E';
	right_header.style.borderLeft = 'solid 50vh #2B0F0E';
	left_header.style.borderRight = 'solid 20vh transparent';
	right_header.style.borderRight = 'solid 20vh transparent';
	contact_icon.style.visibility = 'visible';
	contact_icon.style.opacity = '1';
	menu_cancel.style.visibility = 'hidden';
	menu_cancel.style.opacity = '0';
});