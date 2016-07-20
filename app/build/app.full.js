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

/* 
   #ContactView
   ========================================================================== */

app.ContactView = new leaf.View({
    draw: function (el) {
        leaf.http.include('/views/templates/contact.html', 'main', function () {
            /**
             * Execute the code below once the template is loaded.
             */
        });

        return el.innerHTML;
    }
});

/**
 * Router definition
 */
app.Router.add('#/contact', function () { app.ContactView.render('main'); });

/* 
   #HomeView
   ========================================================================== */

app.HomeView = new leaf.View({
    draw: function (el) {
        leaf.http.include('/views/templates/home.html', 'main', function () {
            /**
             * Execute the code below once the template is loaded.
             */
        });

        return el.innerHTML;
    }
});

/**
 * Router definition
 */
app.Router.add('#/home', function () { app.HomeView.render('main'); });
