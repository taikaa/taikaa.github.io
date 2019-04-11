
		$('#hamburger').click(function() {
			$('ul li').toggle('slow');
		})

		window.addEventListener('resize', function() {
			console.log($('nav').css('display'))
			if ($(window).width() > 780 && $('nav').css('display', 'none')) {
				location.reload()
			}
		})
