// Main JavaScript file for Trial Frontend Project

document.addEventListener('DOMContentLoaded', function() {
    console.log('Trial Frontend Project loaded successfully');
    
    // Initialize any functions or event listeners here
    initializeApp();
});

function initializeApp() {
    // Add any initialization code here
    setupNavigation();
    setupForms();
}

function setupNavigation() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add any navigation logic here
            console.log('Navigation clicked:', this.textContent);
        });
    });
}

function setupForms() {
    // Form handling functionality
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    });
}

function handleFormSubmit(form) {
    // Handle form submission
    const formData = new FormData(form);
    console.log('Form submitted with data:', Object.fromEntries(formData));
    
    // Add your form processing logic here
}

// Utility functions
function showAlert(message, type = 'info') {
    // Create and show alert messages
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    // Add to page and auto-remove after 3 seconds
    document.body.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Export functions if needed for other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showAlert,
        handleFormSubmit,
        setupNavigation
    };
}
