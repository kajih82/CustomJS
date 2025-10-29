document.addEventListener('DOMContentLoaded', function() {
    // Find the input element by ID
    const btn = document.getElementById('btnSubmit');
    
    // Check if it exists and has the correct value
    if (btn && btn.value === 'HideMe3000') {
        btn.style.display = 'none'; // Hide the button
    }
});
