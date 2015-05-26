// This is the code to open a new tab for the map
var myMap = document.getElementById("map_view");
myMap.onclick = function() {
	var myVar = window.open("https://www.google.com/maps/place/Jamestown+Apartments/@33.8189075,-85.7699636,15z/data=!4m2!3m1!1s0x888a4e015b7599ef:0x4538adea1d0f3acf");
};

// This is the code for the secret door
var myDoor = document.getElementById("secret_door");
myDoor.onclick = function () {
    var whoIsThis = prompt("Please enter your name", "Harry Potter");
    if (whoIsThis == "dpctrey" || whoIsThis == "pchalk") {
        alert("login successful!");
    }
}
