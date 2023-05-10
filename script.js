<script>
    // Get the form and all the input fields
    const form = document.querySelector('form');
    const nameField = document.querySelector('#name');
    const phoneField = document.querySelector('#phone');
    const emailField = document.querySelector('#email');
    const passwordField = document.querySelector('#password');
    const checkbox = document.querySelector('#terms');
    
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nameValue = nameField.value.trim().split(' ');
        if (nameValue.length < 2 || nameValue<0> === '' || nameValue<1> === '') {
 nameField.classList.add('error');
            nameField.nextElementSibling.innerHTML = 'Name cannot be empty';
        } else {
            nameField.classList.remove('error');
            nameField.nextElementSibling.innerHTML = '';
        }
        
        // Check if the phone number is valid
        const phoneValue = phoneField.value.trim();
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneValue)) {
            phoneField.classList.add('error');
            phoneField.nextElementSibling.innerHTML = 'Please enter a valid phone number';
        } else {
            phoneField.classList.remove('error');
            phoneField.nextElementSibling.innerHTML = '';
        }
        
        // Check if the email is valid
        const emailValue = emailField.value.trim();
        const emailRegex = /^<^\s@>+@<^\s@>+\.<^\s@>+$/;
        if (!emailRegex.test(emailValue)) {
            emailField.classList.add('error');
            emailField.nextElementSibling.innerHTML = 'Please enter a valid email address';
        } else {
            emailField.classList.remove('error');
            emailField.nextElementSibling.innerHTML = '';
        }
        
        // Check if the password is valid
        const passwordValue = passwordField.value.trim();
        const passwordRegex = /^(?=.*<A-Z>)(?=.*\d)<a-zA-Z\d>{8,}$/;
        if (!passwordRegex.test(passwordValue)) {
            passwordField.classList.add('error');
            passwordField.nextElementSibling.innerHTML = 'Password must be at least 8 characters long and contain at least one uppercase letter and one number';
        } else {
            passwordField.classList.remove('error');
            passwordField.nextElementSibling.innerHTML = '';
        }
        
        // Check if the terms checkbox is checked
        if (!checkbox.checked) {
            checkbox.classList.add('error');
            checkbox.nextElementSibling.innerHTML = 'Please agree to the terms and conditions';
        } else {
            checkbox.classList.remove('error');
            checkbox.nextElementSibling.innerHTML = '';
        }
        
        // Check if there are any errors
        const errors = document.querySelectorAll('.error');
        if (errors.length === 0) {
            console.log(`Name: ${nameValue<0>} ${nameValue<1>}`);
            console.log(`Phone: ${phoneValue}`);
            console.log(`Email: ${emailValue}`);
            console.log(`Password: ${passwordValue}`);
            alert('Form submitted successfully');
        }
    });
</script>