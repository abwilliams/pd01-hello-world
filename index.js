// Global variable to store the currently selected currency
let currentCurrency = "USD";

async function fetchBitcoinPrice() {
    // Construct the API URL with the current currency
    const apiUrl = `https://api.coinbase.com/v2/prices/BTC-${currentCurrency}/spot`;
    
    try {
        // Fetch data from the API
        let response = await fetch(apiUrl);
        // Parse the JSON response
        let jsonData = await response.json();
        // Extract the bitcoin price from the response
        const bitcoinPrice = jsonData.data.amount;

        //Updated the price display on the webpage
        document.getElementById("price").textContent = `${currentCurrency} $${bitcoinPrice}` ;

    } catch (error) {
        // Log any errors that occur during the fetch operation
        // console.error("BTC PRICE = ", bitcoinPrice)
        console.error("Error fetching bitcoin price", error);    
    }
}

function togglePriceVisibility() {
    // Get the element that displays the price.
    const priceElement = document.getElementById("price");
    // Toggle between hiding and showing the price.
    if (priceElement.style.display === "none") {
        priceElement.style.display = "inline";
    } else {
        priceElement.style.display = "none" ;
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

function handleCurrencyChange(currency) {
    // Update the currency when the selection changes
    console.log("EVENT INSIDE HANDLER currency = ", currency);
    currentCurrency = currency;
    console.log("CURRENT CURRENCY in handler = ", currentCurrency);
    // Fetch and display the price for the new currency
    fetchBitcoinPrice();
}

// Wait for the DOM to be fully loaded before setting up the event listeners
document.addEventListener("DOMContentLoaded", function()  {
    // Get references to the relevant DOM elements
    const currencySelector = document.getElementById("currency-selector");
    const toggleButton = document.getElementById("toggle-button");
    const refreshButton = document.getElementById("refresh-button");

    // Set up listener for the toggle visibility button.
    toggleButton.addEventListener("click", togglePriceVisibility);
    
    // Set up event listener for the currency selector drop-down.
    currencySelector.addEventListener("change", function() {
        handleCurrencyChange(currencySelector.value)
    });

    //Set up an event listener for the refresh button.
    refreshButton.addEventListener("click", fetchBitcoinPrice);

    // Set up interval for automatic updates
    setInterval(fetchBitcoinPrice, 5000);      // Update date/time every 5 seconds
    setInterval(updateDateTime, 1000);         // Update date/time every second

    // Initial calls to display data immediately
    fetchBitcoinPrice();
    updateDateTime();
});

