Ext.define('ExtJsExamples.view.ex.Example10CKEditorViewController', {
    extend: 'ExtJsExamples.view.ex.Example07RenderToBodyBaseViewController',
    alias: 'controller.ex10-ckeditor-view',

    requires: [
        'ExtJsExamples.util.Loader'
    ],

    init: function () {
        this.callParent(arguments);
    },

    /**
     * creates a hosting container for external UI
     * @param hostingContainerId
     * @returns string
     */
    getHostingContainerHtml: Ext.emptyFn,

    /**
     * creates a ui component and renders it to the specified containerId
     * @param hostingContainerId
     */
    createUI: Ext.emptyFn,

    /**
     * container resize, so can monitor hosting container size changes
     */
    onViewResize: Ext.emptyFn
});
