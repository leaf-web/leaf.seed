/* ==========================================================================
   #APP.JS
   ========================================================================== */

var app = {
    Router: new leaf.Router(),
    /**
	 * Initialize
	 */
    init: function () {
        app.Router.listen();
        /**
         * Default view
         */
        if (location.href.indexOf("#") == -1) { app.HomeView.render('main'); }
    },
};
