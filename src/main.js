requirejs.config({
    paths: {
        'jquery': '../lib/jquery/dist/jquery',
        'lodash': '../lib/lodash/dist/lodash'
    },

    shim: {
        'lodash': {
            exports: '_'
        }
    }
});

define(['app', 'jquery'], function (App, $) {
    var app = new App($('body'));
    app.render();
});
