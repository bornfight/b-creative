import GridHelper from "./helpers/GridHelper";
import NavigationController from "./components/NavigationController";
import Dummy from "./components/Dummy";

const ready = (callbackFunc) => {
    if (document.readyState !== "loading") {
        /**
         * Document is already ready, call the callback directly
         */
        callbackFunc();
    } else if (document.addEventListener) {
        /**
         * All modern browsers to register DOMContentLoaded
         */
        document.addEventListener("DOMContentLoaded", callbackFunc);
    } else {
        /**
         * Old IE browsers
         */
        document.attachEvent("onreadystatechange", function () {
            if (document.readyState === "complete") {
                callbackFunc();
            }
        });
    }
};

/**
 * Document ready callback
 */
ready(() => {
    /**
     * HELPERS
     * Files are excluded from build and their initialization code is stripped
     * out from this file
     */
    /* start-strip-code */
    const grid = new GridHelper();
    grid.init();
    /* end-strip-code */

    /**
     * CREDITS
     */
    const credits = [
        "background-color: #000000",
        "color: white",
        "display: block",
        "line-height: 24px",
        "text-align: center",
        "border: 1px solid #ffffff",
        "font-weight: bold",
    ].join(";");
    console.info("dev by: %c Bornfight ", credits);

    /**
     * COMPONENTS
     */

    /**
     * Dummy component
     * @type {Dummy}
     */
    const dummy = new Dummy();
    dummy.init();

    /**
     * Navigation
     * @type {NavigationController}
     */
    const navigation = new NavigationController();
    navigation.init();
});
