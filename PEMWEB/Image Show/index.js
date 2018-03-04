var form = document.getElementById('form');

function setText(groupName) {
	var radios = selectionForm.elements[groupName];
	var rdValue; // declares the global variable 'rdValue'
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			rdValue = radios[i].value;
			break;
		}
	}
	var element = document.getElementById("image");
	element.setAttribute("src", rdValue);
	element.setAttribute("height", 500);
	element.setAttribute("width", 500);
}