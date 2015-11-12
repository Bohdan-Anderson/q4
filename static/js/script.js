var app = {
	init: function() {
		app.slides.init()
		$('<img/>').attr('src', '/static/img/vibrant_communities.jpg').load(function() {
			$(this).remove();
			$("body").removeClass("not_loaded");
		});
		setTimeout(function() {
			$("body").removeClass("not_loaded");
		}, 1500);
	}
}

app.slides = {
	init: function() {
		var slick = $("#slides").slick({
			autoplay: true,
			autoplaySpeed: 6000,
			arrows: false,
			pauseOnHover: false,
			lazyLoad: "progressive",
			fade: true,
			speed: 3000
		});
		$("#slides").click(function(event) {
			slick.slick("slickNext");
		});
	},

}


app.init();