/*
	Student Name: Donnie Ranjel
	File Name: script.js
	Date: 10/27/2024
*/

//Global variables

//Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("mobile-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}