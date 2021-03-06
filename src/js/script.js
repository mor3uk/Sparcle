const checkScroll = () => {
	$hWrapper = document.querySelector('.header');
    if (window.scrollY >= 100) {
        $hWrapper.classList.add('header_scrolled');
    }

    if (window.scrollY < 100) {
        $hWrapper.classList.remove('header_scrolled');
    }
};

window.onload = () => {
	checkScroll();
	window.addEventListener('scroll', checkScroll);

	$plusBtns = document.querySelectorAll('.btn_plus');
	$minusBtns = document.querySelectorAll('.btn_minus');

	for (let i = 0; i < $plusBtns.length; i++) {
		$plusBtns[i].addEventListener('click', (e) => {
			$countElem = e.target.parentNode
				.querySelector('.book-number__count');

			$countElem.textContent = ++$countElem.textContent;
			
		});
	}

	for (let i = 0; i < $minusBtns.length; i++) {
		$minusBtns[i].addEventListener('click', (e) => {
			$countElem = e.target.parentNode
				.querySelector('.book-number__count');

			$countElem.textContent = --$countElem.textContent;
			
		});
	}

	const slider = tns({
	    container: '.customers__list',
	    slideBy: 1,
	    autoplay: true,
	    mouseDrag: true,
	    autoplayTimeout: 2000,
	    speed: 700,
	    autoplayHoverPause: true,
	    responsive: {
	    	768: {
			    items: 2
	    	},
	    	0: {
	    		items: 1
	    	}
	    }
  });

	new WOW().init();
}