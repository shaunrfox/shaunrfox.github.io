var url = window.location.pathname;

var removeActive = function() {
	$('#worknav').removeClass('active');
}

var navHighlight = function() {
	if (url.search("photos") > -1) {
		removeActive();
		$('#photosnav').addClass('active');
	} else if (url.search("about.html") > -1) {
		removeActive();
		$('#aboutnav').addClass('active');
	} else if (url.search("resources") > -1) {
		removeActive();
		$('#xnav').addClass('active');
	}
}

// Greeting
$(window).load(function() {
	// Greeting
	var date = new Date();
	var time = date.getHours();
	function insertGreeting() {
		if (time < 12) {
			return "Good&nbsp;morning, I&rsquo;m&nbsp;Shaun.";
		} else if ((time > 11)&&(time < 18)) {
			return "Good&nbsp;afternoon, I&rsquo;m&nbsp;Shaun.";
		} else {
			return "Good&nbsp;evening, I&rsquo;m&nbsp;Shaun.";
		}
	}

	$(".main-title").html(insertGreeting());

	setTimeout(function() {
		$(".main-title").addClass("show");
	}, 0);
});

$(document).ready(function() {
	navHighlight();
	$(".project-video").fitVids();

	// Foxerize
	$(".foxButton").raptorize({ "sounds": "fox sounds"});
	$(".elFox").css("width", "auto");
});
