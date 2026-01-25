(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "croki115";
		/* all Pure helper functions */

		function waitForElement(selector, trigger) {
			var interval = setInterval(function () {
				if (
					document &&
					document.querySelector(selector) &&
					document.querySelectorAll(selector).length > 0
				) {
					clearInterval(interval);
					trigger();
				}
			}, 50);
			setTimeout(function () {
				clearInterval(interval);
			}, 15000);
		}

		function addClass(el, cls) {
			var el = document.querySelector(el);
			if (el) {
				el.classList.add(cls);
			}
		}

		function addingClassToSection() {
			document.querySelectorAll('h2.elementor-heading-title').forEach(function (e) {
				if (e.textContent.includes('Be part of the LDi global dental community helping you learn, earn, and lead')) {
					e.closest('section').classList.add('croki115-HeroSection');
				}

				if (e.textContent.includes('Who we are')) {
					e.closest('section').classList.add('croki115-Who_Section');
				}

				if (e.textContent.includes('How will the LDi courses benefit you?')) {
					e.closest('section').classList.add('croki115-Benefit_Section');
				}
			});
		}

		function init() {
			addClass("body", variation_name)
			var doneTypingInterval = 6000;  //time in ms, 5 seconds for example
			var intervalCallAgain = setInterval(function () {
				addingClassToSection();
			}, 400);

			//start the countdown
			var Timer = setTimeout(function () {
				clearInterval(intervalCallAgain);
			}, doneTypingInterval);

		}


		waitForElement('h2.elementor-heading-title', init);
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();