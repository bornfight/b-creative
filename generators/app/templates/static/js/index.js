import NavigationController from "./components/NavigationController";
import Dummy from "./components/Dummy";
import ScrollAnimationHelper from "./components/ScrollAnimationHelper";

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
    const dummy = new Dummy();
    dummy.init();

    const navigation = new NavigationController();
    navigation.init();

    const scrollAnimationHelper = new ScrollAnimationHelper();
    scrollAnimationHelper.init();
});
