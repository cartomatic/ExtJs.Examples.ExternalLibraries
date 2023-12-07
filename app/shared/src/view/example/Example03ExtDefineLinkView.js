Ext.define('ExtJsExamples.view.ex.Example03ExtDefineLinkView', {
    extend: 'Ext.Panel',
    xtype: 'ex03-ext-define-link-view',
    controller: 'ex03-ext-define-link-view',
    viewModel: {
        type: 'ex03-ext-define-link-view'
    },
    title: 'ExtDefineLink',
    layout: {
        type: 'vbox',
        alight: 'stretch'
    },
    items: [
        {
            xtype: 'button',
            text: 'Render map',
            listeners: {
                tap: 'renderMap',
                click: 'renderMap'
            }
        },
        {
            xtype: 'container',
            width: 500,
            height: 500,
            html: '<div id="google-map" style="width:500px; height:500px; border:solid black 1px;"></div>'
        }
    ]
});
