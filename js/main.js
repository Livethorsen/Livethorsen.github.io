/* This is a comment */
function askQuestions() {

var firstName = prompt ('What is your first name');
var lastName = prompt ('What is your last name');

var fullName = firstName + ' ' + lastName;
console.log('User is called ' + fullName);

var userAge = prompt('How old are you?')
userAge = parseInt(userAge);

if (userAge <= 18) {
	console.log('User is an adult.');
} else if (userAge >= 13) {
	console.log('User is a teenager.');
} else {
	console.log('User is a child');
}


// if the users first name is 'General and their last name is NOT assembly' then greet the general

if (firstName == "General" && lastName != "Assembly") {
	console.log('welcome general');
}

}

// when the page has loaded
$(function() {


// When the user clicks the image, ask questions
&('img').on('click', askQuestions);


	// When the user clicks an h3
	$('h3').on('click', function() {

		// Hide the next element
		$(this).next().slideToggle(50);
	});

});



