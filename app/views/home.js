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
