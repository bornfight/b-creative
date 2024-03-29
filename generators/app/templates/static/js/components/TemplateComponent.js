import { $html, $body } from "../utilities/dom.js";

/**
 * Template component
 * explain what this class is doing
 */
export default class TemplateComponent {
    constructor(container = document) {
        /**
         * DOM elements
         * @type {{templateComponentArray: string, templateComponent: string, states: {isActive: string}}}
         */
        this.DOM = {
            templateComponent: ".js-template-component",
            templateComponentArray: ".js-template-component-array",
            states: {
                active: "is-active",
            },
        };

        /**
         * Get template component DOM element
         * @type {Element}
         */
        this.templateComponent = container.querySelector(this.DOM.templateComponent);

        /**
         * Get list of template component DOM elements
         * @type {NodeListOf<Element>}
         */
        this.templateComponentArray = container.querySelectorAll(this.DOM.templateComponentArray);
    }

    /**
     * Init
     */
    init() {
        if (this.templateComponent === null) {
            return;
        }
        if (this.templateComponentArray.length < 1) {
            return;
        }
        console.log("Template component init");
        this.templateMethod();
    }

    /**
     * Template method
     * explain what this method is doing
     */
    templateMethod() {
        console.log("Template method init");
    }
}
