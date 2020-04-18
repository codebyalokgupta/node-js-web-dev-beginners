function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function changePercentOff(percentage) {
    //console.log("initial value of percentage in changePercentOff function is ", percentage);
    console.log("from the web page value of percent is", document.getElementById('percent-off').textContent = percentage);
    document.getElementById('percent-off').textContent = percentage + "% OFF";
}



/*
function changePercentOff(percentage) {
    document.getElementById('percent-off').textContent = percentage + "% OFF";
}

*/