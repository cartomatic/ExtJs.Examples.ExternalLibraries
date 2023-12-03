Ext.define('ExtJsExamples.view.ex.Example02HeadLinkView', {
    extend: 'Ext.Panel',
    xtype: 'ex02-head-link-view',
    reference: 'ex02-head-link-view',
    controller: 'ex02-head-link-view',
    viewModel: {
        type: 'ex02-head-link-view'
    },
    title: 'HeadLink',
    layout: 'center',
    items: [
        {
            xtype: 'button',
            text: 'Render map',
            listeners: {
                tap: 'renderMap'
            }
        },
        {
            xtype: 'container',
            width: 500,
            height: 500,
            html: '<div id="leaflet-map" style="width:500px; height:500px; border:solid black 1px;"></div>'
        }
    ]
});
