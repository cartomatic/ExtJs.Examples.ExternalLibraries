Ext.define('ExtJsExamples.view.ex.Example06Reusable3dMapComponent', {
    extend: 'ExtJsExamples.view.ex.Example05ReusableMapComponent',
    xtype: 'ex06-reusable-3d-map-component',
    controller: 'ex06-reusable-3d-map-component',
    viewModel: {
        type: 'ex06-reusable-3d-map-component'
    },
    title: 'Reusable3dMapCmp',
    config: {
        lo: 21.02409,
        la: 52.20634,
        zoom: 3
    },
    tbar: [
        '->',
        {
            xtype: 'button',
            text: 'Toggle 3D',
            enableToggle: true,
            allowDepress: true,
            toggleHandler: 'on3dToggle'
        }
    ]
});
