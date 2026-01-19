(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "croki105";
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
        
        var newParts = `<div class="croki105-new-section">
        <div class="croki105-new-wrapper">
            <div class="croki105-new-inner">
                    <div class="croki105-new-text">
                        <span>Suitable for :</span> Graduate dentists | Newly qualified dentists | Hospital dentists | Private dentists | Experienced dentists
                    </div>
            </div>

        </div>
    </div>`;
        
        function init() {
            addClass("body", variation_name);

            waitForElement('.has_eae_slider h4.elementor-heading-title', function () {
            document.querySelectorAll('.has_eae_slider h1.elementor-heading-title').forEach(function (e) {
                var parent = e.closest('.has_eae_slider.e-parent');
                    if (parent && e.innerHTML.indexOf('POSTGRADUATE DENTAL COURSES') !== -1) {
                            parent.classList.add('cro-hero-banner');
                        }
                });
            });

            waitForElement(".has_eae_slider.cro-hero-banner", function () {
                if (!document.querySelector(".croki105-new-section")) {
                    insertHtml(".has_eae_slider.cro-hero-banner", newParts, "afterend");
                }
            });
        }
        
        
        waitForElement('#waf_open_fa_interest_modal_btn', init);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();