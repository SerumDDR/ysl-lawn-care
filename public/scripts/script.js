/*
	Name: Donnie Ranjel
	File Name: script.js
	Date: 11/24/2024
*/

const API_URL = "https://ysl-lawn-care-api-java.onrender.com/api/contact-form";

//Global variables
var figElement = document.getElementById("placeholder");
var imgSource = document.getElementById("image");
var figCap = document.getElementById("gal-text");

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

// Add event listener to the menu icon
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', hamburger);
    }

    var contactForm = document.getElementById('contactForm');
    if (contactForm) {

        // Event listener handles the submission using fetch
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Client-Side Validation (Fast Check)
            var missing = [];

            // All validation checks
            if (!document.getElementById('fName').value.trim()) { missing.push('First Name'); }
            if (!document.getElementById('lName').value.trim()) { missing.push('Last Name'); }
            if (!document.getElementById('email').value.trim()) { missing.push('Email'); }
            if (!document.getElementById('phone').value.trim()) { missing.push('Phone'); }

            if (missing.length > 0) {
                alert('Please fill in the following fields: ' + missing.join(', ') + '.');
                return;
            }

            // Gather Data and Convert to JSON
            var formData = new FormData(contactForm);
            var data = {};

            // Map form data fields (names like "fName") to a JavaScript object for ContactForm.java DTO
            formData.forEach((value, key) => {
                if (key.endsWith('[]')) {
                    key = key.slice(0, -2);
                    data[key] = data[key] || [];
                    data[key].push(value);
                } else {
                    data[key] = value;
                }
            });

            // Send the POST Request to the Java API
            fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Crucial for Java API (it expects JSON)
                },
                body: JSON.stringify(data) // Convert the data object into a JSON string
            })
            .then(response => {
                if (!response.ok) {
                    // Throw an error if the status is 400 (Bad Request) or 500 (Server Error)
                    return response.text().then(text => { throw new Error(text) });
                }
                return response.text();
            })
            .then(responseText => {
                // SUCCESS: Shows the message returned by the Java Controller (e.g., "Thank you...")
                alert(responseText);
                contactForm.reset(); // Clear the form on success
            })
            .catch(error => {
                // ERROR: Shows the message returned by the Java Controller or a network error
                alert('Submission failed: ' + error.message);
                console.error('Submission failed:', error);
            });
        });
    }
});

//Function to display the first picture
function pic1() {
    imgSource.src = "images/after-back-white-house.jpeg";
    imgSource.alt = "clean fresh mowed striped grass backyard";
    figElement.style.display = "block";
    figCap.innerText = "Stripe Design";
}

//Function to display second image
function pic2() {
	imgSource.src = "images/after-wavy-yard-design.jpeg"
	imgSource.alt = "mowed grass wavy design";
    figElement.style.display = "block";
    figCap.textContent = "Wavy Design";
}

//Function to display third image
function pic3() {
	imgSource.src = "images/after-trimmed-front-yard.jpeg"
	imgSource.alt = "mowed grass trimmed walkway";
    figElement.style.display = "block";
    figCap.textContent = "Walkway Installation";
}

//Function to display fourth image
function pic4() {
    imgSource.src = "images/after-backyard.jpeg";
    imgSource.alt = "clean fresh mowed backyard";
    figElement.style.display = "block";
    figCap.textContent = "Spring Special";
}

//Function to display fifth image
function pic5() {
	imgSource.src = "images/after-ac-side-house.jpeg"
	imgSource.alt = "after image of complex edge and trim";
    figElement.style.display = "block";
    figCap.textContent = "Custom Special";
}

//Function to display sixth image
function pic6() {
	imgSource.src = "images/striped-back-yard.jpeg"
	imgSource.alt = "Mowed yard with stripe design";
    figElement.style.display = "block";
    figCap.textContent = "Fall Special";
}

//Function to display seventh image
function pic7() {
    imgSource.src = "images/christmas-decor-front-lawn4.jpg";
    imgSource.alt = "christmas decoration setup lights and blow-ups";
    figElement.style.display = "block";
    figCap.textContent = "Christmas Paradise";
}

//Function to display eighth image
function pic8() {
	imgSource.src = "images/purple-blue-halloween-decor.png"
	imgSource.alt = "purple and blue halloween lights and other decorations";
    figElement.style.display = "block";
    figCap.textContent = "Halloween Light";
}

//Function to display ninth image
function pic9() {
	imgSource.src = "images/halloween-decor-orange-lights.jpg"
	imgSource.alt = "light of orange halloween and other decorations";
    figElement.style.display = "block";
    figCap.textContent = "Halloween Dark";
}


