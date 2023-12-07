Ext.define('ExtJsExamples.view.ex.Example08StreetViewView', {
    extend: 'ExtJsExamples.view.ex.Example07RenderToBodyBaseView',
    xtype: 'ex08-street-view-view',
    controller: 'ex08-street-view-view',
    viewModel: {
        type: 'ex08-street-view-view'
    },
    title: 'GoogleStreetView',
    config: {
        lo: 21.02409,
        la: 52.20634
    }
});
