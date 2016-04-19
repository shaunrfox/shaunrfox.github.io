var url = window.location.pathname;
//console.log(url);

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

$(document).ready(function() {
	navHighlight();
	$(".project-video").fitVids();
});