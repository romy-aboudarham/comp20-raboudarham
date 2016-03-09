// Your JavaScript goes here...

var request = new XMLHttpRequest();

function parse() {
	request.open("GET", "data.json", true);
	request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
        	response = request.responseText;
        	messages = JSON.parse(response);
        	elem = document.getElementById("messages");
        	for(var count = 0; count < messages.length; count++) {
       			elem.innerHTML += "<p>" + messages[count].content + " " + messages[count].username + "</p>";
    		}
		}
	};
	request.send(null);
}