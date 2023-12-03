Ext.define('ExtJsExamples.view.ex.Example01WebPackRequireView', {
    extend: 'Ext.Panel',
    xtype: 'ex01-view-web-pack-require-view',
    reference: 'ex01-view-web-pack-require-view',
    controller: 'ex01-view-web-pack-require-view',
    viewModel: {
        type: 'ex01-view-web-pack-require-view'
    },
    title: 'WebPackRequire',
    layout: 'center',
    items: [
        {
            xtype: 'label',
            reference: 'lblMoment'
        }
    ]
});
