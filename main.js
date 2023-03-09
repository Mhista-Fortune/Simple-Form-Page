// Get the form and message elements
const form = document.querySelector('#myForm');
const message = document.querySelector('#message');

// Add an event listener to the form submit button
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Validate the form inputs
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  if (!name || !email) {
    // Display an error message if the form inputs are invalid
    message.textContent = 'Please fill in all required fields.';
    return;
  }

  // Submit the form data to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      // Display a success message if the form submission is successful
      /*message.textContent = 'Form submitted successfully!';*/
      message.textContent = alert('Form submitted successfully!');
      form.reset();
    } else {
      // Display an error message if the form submission fails
      message.textContent = 'An error occurred while submitting the form.';
    }
  };
  xhr.send(JSON.stringify({ name, email }));
});
