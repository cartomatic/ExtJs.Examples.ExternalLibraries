Ext.define('ExtJsExamples.view.ex.Example10CKEditorView', {
    extend: 'ExtJsExamples.view.ex.Example07RenderToBodyBaseView',
    xtype: 'ex10-ckeditor-view',
    controller: 'ex10-ckeditor-view',
    viewModel: {
        type: 'ex10-ckeditor-view'
    },
    title: 'CKEditor',
    bbar: [
        '->',
        {
            xtype: 'button',
            text: 'Set demo HTML',
            handler: 'setHtml'
        },
        {
            xtype: 'button',
            text: 'Dump HTML to console',
            handler: 'dumpHtml'
        }
    ]
});
