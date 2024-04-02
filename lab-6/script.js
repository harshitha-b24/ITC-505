function convertToMiles() {
    var km = parseFloat(document.getElementById("kmInput").value);
    if (!isNaN(km)) {
        var miles = km * 0.621371; // 1 kilometer = 0.621371 miles
        document.getElementById("result").innerHTML = km + " kilometers is equal to " + miles.toFixed(2) + " miles.";
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid number for kilometers.";
    }
}

var x = document.lastModified;
document.getElementById('lastModified').textContent = x;
