var reasons = [
	"It's not you, it's me.",
	"I'm not ready for a relationship right now.",
	"I need to focus on myself.",
	"I think I need to be alone for a bit.",
	"I'm just so busy with work right now.",
	"I don't think we're a good match.",
	"I'm just not feeling it.",
	"You deserve someone better.",
	"My dog needs all my love and attention now.",
	"You're too good for me.",
	"I'm still getting over my ex.",
	"I'm fully devoted to my digital nomad lifestyle."
]

document.addEventListener("DOMContentLoaded", function(event) {

	var reason =  reasons[Math.floor(Math.random()*reasons.length)];

	var element = document.getElementById("reason");

	element.innerHTML = reason;

	console.log(reasons);

});

