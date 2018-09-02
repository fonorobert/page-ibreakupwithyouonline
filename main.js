var reasons = [
	"It's not you, it's me.",
	"I'm not ready for a relationship right now.",
	"I need to focus on myself right now.",
	"I think I need to be alone for a bit.",
	"I'm just so busy with work right now.",
	"I don't think we're a good match.",
	"I'm just not feeling it.",
	"You deserve someone better."
]

document.addEventListener("DOMContentLoaded", function(event) {

	var reason =  reasons[Math.floor(Math.random()*reasons.length)];

	var element = document.getElementById("reason");

	element.innerHTML = reason;

	console.log(reasons);

});

