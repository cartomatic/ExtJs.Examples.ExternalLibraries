Ext.define('ExtJsExamples.view.ex.Example01WebPackRequireViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ex01-web-pack-require-view',

    init: function () {
        //see the index.js in the app's root - the standardised ExtJs npm package linking approach
        this.lookupReference('lblMoment').setHtml(ExtJsExamples.moment().format('LLLLL'));
    }

});
