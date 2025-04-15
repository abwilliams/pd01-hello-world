function updateDateTime() {
    // Get the element where the dat/time will be displayed.
    const dateTimeElement = document.getElementById("datetime");
    // Get the current date and time as a localised string.
    const currentDateTime = new Date().toLocaleString();
    dateTimeElement.textContent = currentDateTime;
}

// Wait for the DOM to be fully loaded before setting up the event listeners
document.addEventListener("DOMContentLoaded", function()  {
    setInterval(updateDateTime, 1000);      // Update date/time every second

    // Initial calls to display data immediatly
    updateDateTime();
});

