// Function to set current date and time on page load
window.onload = function () {
    const today = new Date();

    // Format date as YYYY-MM-DD
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById("date").value = formattedDate;

    // Format time as HH:MM (24-hour format)
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    document.getElementById("time").value = `${hours}:${minutes}`;
};

// Prevent double submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = form.querySelector('input[type="submit"]');

    form.addEventListener("submit", function () {
        submitButton.disabled = true; // Disable button
        submitButton.value = "Submitting..."; // Change button text
    });
});
