// Your JavaScript goes here...


function parse() {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
        var messages = JSON.parse(request.responseText);
        if (request.readyState == 4 && request.status == 200) {
        elem = document.getElementById("messages");
        for(var count = 0; count < messages.length; count++) {
       		elem.innerHTML += "<p>" + messages[count].content + " " + messages[count].username + "</p>";
    	}
	}
	request.send();
}
}