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
