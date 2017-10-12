
var require = {
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
};
if(typeof module === "object" && typeof module.exports === 'object'){
    module.exports = require;
}