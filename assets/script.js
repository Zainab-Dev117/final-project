

menuToggle.addEventListener("click", function() {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
});

function getLocation() {
    const output = document.getElementById("geolocation");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        output.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById("location").innerHTML =
        "Latitude: " + lat + "<br>Longitude: " + lon;
}

function showError(error) {
    document.getElementById("location").innerHTML =
        "Permission denied or location not available.";
}
