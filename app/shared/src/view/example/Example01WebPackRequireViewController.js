Ext.define('ExtJsExamples.view.ex.Example01WebPackRequireViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ex01-view-web-pack-require-view',

    init: function () {
        this.lookupReference('lblMoment').setHtml(ExtJsExamples.moment().format('LLLLL'));
    }

});
