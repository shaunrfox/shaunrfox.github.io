// Variables

// var iconsContainer = $(".icons-column");
var iconList = $("#fox-icons > defs > g");
var searchInput = $(".search > input");
var search;
var hash;

// Generate Icons
function generateIcons() {
	iconList.each(function() {
		var thisIconID = $(this).attr("id");
		// console.log(thisIconID);

		$(".icons-column").append('\
			<button class="icon-wrapper" data-name="' + thisIconID + '">\
				<span class="title">.' + thisIconID + '</span>\
				<svg viewBox="0 0 30 30" class="' + thisIconID + '">\
					<use xlink:href="#' + thisIconID + '"></use>\
				</svg>\
			</button>\
			');
	});
};

// Count Icons
function countIcons() {
	var iconCount = iconList.length;
	$(".count").append( " (" + iconCount + " and counting!)" );
};

// Check window hash and put into search input
function checkHash() {
	// Check if hash has content
	if (hash !== "") {
		searchInput.val(hash);
	}
};

// Filter Icons based on search input value
function filterIcons() {
	search = searchInput.val().toLowerCase();

	if ( search.length > 0 ) {
		$(".clear-search").addClass("has-text");
		window.location.hash = "#"+search;
	} else {
		$(".clear-search").removeClass("has-text");
		window.location.hash = "";
	}

	$(".icon-wrapper").each(function(index, element) {
		 var dataName = $(this).attr("data-name");

		 if ( dataName.indexOf(search) !== -1 ) {
				$(this).show();
				return;
		 }

		 $(this).hide();
	});
}


$(document).ready(function() {
	hash = window.location.hash.substring(1);
	searchInput = $(".search > input");

	generateIcons();
	countIcons();
	checkHash();
	filterIcons();
});

$(document).ready(function() {

	// Click to select icon
	$(".icon-wrapper").on("click", function() {
		var svgString =
			"&lt;svg viewBox=&#34;0 0 30 30&#34; class=&#34;CLASS_NAME&#34;&gt;&#10;&#32;&#32;&lt;use xlink:href=&#34;#ICON_NAME&#34;&gt;&lt;/use&gt;&#10;&lt;/svg&gt;";
		var clickDataName = $(this).attr("data-name");
		var mySVGString = svgString + "";

		var iconName = clickDataName;
		var className = clickDataName;

		if ( clickDataName.indexOf(" spin-the-spinner") !== -1 ) {
			iconName = clickDataName.replace(/ spin-the-spinner/, "");
		}

		mySVGString = mySVGString.replace(/ICON_NAME/g, iconName);
		mySVGString = mySVGString.replace(/CLASS_NAME/g, className);

		$(".prettyprint").html(mySVGString);
	});

	// Filter list on keyup
	searchInput.on("keyup", function(e) {
		filterIcons();
	});

	// Clear Search button click
	$(".clear-search").on("click", function() {
		searchInput.val("");
		$(this).removeClass("has-text");
		window.location.hash = "";
		$(".search > input").focus();
		filterIcons();
	});

});
