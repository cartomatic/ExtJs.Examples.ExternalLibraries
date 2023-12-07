Ext.define('ExtJsExamples.view.ex.Example09PanellumView', {
    extend: 'ExtJsExamples.view.ex.Example07RenderToBodyBaseView',
    xtype: 'ex09-panellum-view',
    controller: 'ex09-panellum-view',
    viewModel: {
        type: 'ex09-panellum-view'
    },
    title: 'PanellumView',
    config: {
        panoramaUri: 'https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg',
        autoLoad: true
    }
});
