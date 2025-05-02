// Basic script file - can be expanded later for form handling (e.g., validation, AJAX submission)

document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form data
    const formData = new FormData(this);
    
    // Create and show loading state
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="width: 50px; height: 50px; border: 5px solid #f3f3f3; border-top: 5px solid #5c67f2; border-radius: 50%; margin: 20px auto; animation: spin 1s linear infinite;"></div>
            <p style="color: #333; font-size: 1.1em; margin-top: 20px;">Our AI agent is now ranking your profile based on looks</p>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;

    // Submit the form
    this.submit();

    // Redirect to success page after 15 seconds
    setTimeout(function() {
    window.location.href = 'success.html';
    }, 15000);
}); 