(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "croki113";
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
        
        function insertHtml(selector, content, position) {
            var el = document.querySelector(selector);
            if (!position) {
                position = "afterend";
            }
            if (el && content) {
                el.insertAdjacentHTML(position, content);
            }
        }

        function addClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.add(cls);
            }
        }
        
        var newHeader = `<div class="croki113-new-header">
        <div class="croki113-new-header-inner">
            <div class="croki113-new-header-text">
                Accelerate your career with an internationally-recognised diploma from <span>world-class dental experts</span>
            </div>
        </div>
    </div>`;
        
        function init() {
            addClass("body",variation_name);

             waitForElement('.has_eae_slider h4', function () {
                        document.querySelectorAll('.has_eae_slider h4').forEach(function (e) {
                        var parent = e.closest('.has_eae_slider.e-parent');
                            if (parent && e.innerHTML.indexOf('POSTGRADUATE DENTAL COURSES') !== -1) {
                                parent.classList.add('croki113-hero-Section');
                                }
                        });
            });

            waitForElement("h2.elementor-heading-title", function () {
				document.querySelectorAll("h2.elementor-heading-title").forEach(function (e) {
					if (e.innerHTML.indexOf("Be part of the LDI global dental") != -1) {
						var parent = e.closest(".e-parent");
						if (parent) {
							parent.classList.add("croki113-hero-Section");
						}
					}
				});
			});

            waitForElement(".croki113-hero-Section h2", function () {
                if (!document.querySelector(".croki113-new-header")) {
                    insertHtml(".croki113-hero-Section h2", newHeader, "afterend");
                }
            });
        }
        
        
        waitForElement('#waf_fa_interest_modal', init);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();