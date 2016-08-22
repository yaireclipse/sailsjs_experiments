(function() {

	console.log("entered page with hash = " + window.location.hash);
	var hash = window.location.hash;
	if ( ! hash || hash.length === 0) {
		hash = "#home";
	}
	
	$("a").click(function(){
		var hr = $(this).attr("href");
		console.log("pressed button with href = " + hr);
		if (hr.startsWith("#")) { // inner-page ref
			var hash = hr.substring(1);
			console.log("current hash is: " + window.location.hash);
			$(".main").hide();
			// $("." + window.location.hash.substring(1)).hide();
			$("ul.nav li.active").removeClass("active");
  			$(this).parent('li').addClass('active');
			$("." + hash).show();
		}
	});

	$("ul.nav li a[href='" + hash + "']").click();
	// $("a[href='" + hash + "']").click();
	// $("a").click();

})();