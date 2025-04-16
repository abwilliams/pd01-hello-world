// Global variable to store the currently selected currency
let currentCurrency = "USD";

async function fetchBitcoinPrice() {
    // Construct the API URL with the current currency
    const apiUrl = 'https://api.coinbase.com/v2/prices/BTC-${currentCurrency}/spot';

    try {
        // Fetch data from the API
        let response = await fetch(apiUrl);
        // Parse the JSON response
        let jsonData = await response.json();
        // Extract the bitcoin price from the response
        const bitcoinPrice = jsonData.data.amount;

        //Updated the price display on the webpage
        document.getElementById("price").textContent = '${currentCurrency} $${bitcoinPrice}' ;

    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error("Error fetching bitcoin price", error);    
    }
}


function updateDateTime() {
    // Get the element where the dat/time will be displayed.
    const dateTimeElement = document.getElementById("datetime");
    // Get the current date and time as a localised string.
    const currentDateTime = new Date().toLocaleString();
    // Update the dat/time display
    dateTimeElement.textContent = currentDateTime;
}

// Wait for the DOM to be fully loaded before setting up the event listeners
document.addEventListener("DOMContentLoaded", function()  {
    // Set up interval for automatic updates
    setInterval(fetchBitcoinPrice, 5000);      // Update date/time every 5 seconds
    setInterval(updateDateTime, 1000);      // Update date/time every second

    // Initial calls to display data immediately
    fetchBitcoinPrice();
    updateDateTime();
});

