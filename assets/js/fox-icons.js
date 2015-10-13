$(document).ready(function() {

	var iconsContainer = $(".icons-column");
	var iconList = $("#fox-icons > defs > g");

	iconList.each(function() {
		var thisIcon = $(this);
		var thisIconID = thisIcon.attr("id");
		console.log(thisIconID);

		iconsContainer.append('\
			<button class="icon-wrapper" data-name="' + thisIconID + '">\
				<span class="title">.' + thisIconID + '</span>\
				<svg viewBox="0 0 30 30" class="' + thisIconID + '">\
					<use xlink:href="#' + thisIconID + '"></use>\
				</svg>\
			</button>\
			');
	});

	// Clear out the input, regardless
	$(".search > input").val("");

	// Get count of icons (for fun)
	$(function() {
		var iconCount = $(".icon-wrapper").length;
		$(".count").append( " (" + iconCount + " and counting!)" );
	});

	var svgString =
	"&lt;svg viewBox=&#34;0 0 30 30&#34; class=&#34;CLASS_NAME&#34;&gt;&#10;&#32;&#32;&lt;use xlink:href=&#34;#ICON_NAME&#34;&gt;&lt;/use&gt;&#10;&lt;/svg&gt;";

	// Select icon
	$(".icon-wrapper").on("click", function() {
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

	// Filter list
	$(".search > input").on("keyup", function(e) {
		var search = $(this).val().toLowerCase();

		if ( search.length > 0 ) {
			$(".clear-search").addClass("has-text");
		} else {
			$(".clear-search").removeClass("has-text");
		}

		$(".icon-wrapper").each(function(index, element) {
			 var dataName = $(this).attr("data-name");

			 if ( dataName.indexOf(search) !== -1 ) {
					$(this).show();
					return;
			 }

			 $(this).hide();
		});
	});

	// Clear Search button click
	$(".clear-search").on("click", function() {
		$(".search > input").val("");
		$(".icon-wrapper").show();
		$(this).removeClass("has-text");
		$(".search > input").focus();
	});
});
