// Add event listener to contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
	event.preventDefault();
	
	// Get the form data
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;
	
	// Send the form data to a server-side script (e.g. PHP)
	fetch('/contact', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: `name=${name}&email=${email}&message=${message}`,
	})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error('Error:', error));
});