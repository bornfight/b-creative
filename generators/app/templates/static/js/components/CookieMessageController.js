import Cookies from "js-cookie";
import gsap from "gsap";

export default class CookieMessageController {
    constructor() {
        /**
         * Cookie message DOM selectors
         * @type {{closeButton: string, wrapper: string}}
         */
        this.DOM = {
            wrapper: ".js-cookie-message-wrapper",
            closeButton: ".js-cookie-message-close",
        };

        /**
         * fetch cookie message DOM elements
         * @type {Element}
         */
        this.popupWrapper = document.querySelector(this.DOM.wrapper);
        this.closeButton = document.querySelector(this.DOM.closeButton);
    }

    init() {
        /**
         * Check if Dom elements exists
         * Check if cookie already accepted
         */

        if (
            this.popupWrapper !== null &&
            this.closeButton !== null &&
            !Cookies.get("cookieMessageAccepted")
        ) {
            this.cookieMessageController();
        }
    }

    /**
     * Shows cookie message
     * Adds event listener to close button
     */
    cookieMessageController() {
        this.showMessage();
        this.closeButton.addEventListener("click", () => {
            this.hideMessage();
        });
    }

    /**
     * Use gsap to animate message popup
     */
    showMessage() {
        gsap.to(this.popupWrapper, 0.3, {
            delay: 1,
            y: 0,
            autoAlpha: 1,
        });
    }

    /**
     * Use gsap to animate popup close
     */
    hideMessage() {
        Cookies.set("cookieMessageAccepted", true, {
            expires: 365,
        });

        gsap.to(this.popupWrapper, 0.3, {
            autoAlpha: 0,
            y: 30,
        });
    }
}
