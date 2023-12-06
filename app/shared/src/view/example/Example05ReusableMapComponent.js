Ext.define('ExtJsExamples.view.ex.Example05ReusableMapComponent', {
    extend: 'ExtJsExamples.view.ex.Example04RenderToBodyView',
    xtype: 'ex05-reusable-map-component',
    controller: 'ex05-reusable-map-component',
    viewModel: {
        type: 'ex05-reusable-map-component'
    },
    title: 'ReusableMapCmp',
    config: {
        lo: 21.02409,
        la: 52.20634,
        zoom: 8
    }
});
