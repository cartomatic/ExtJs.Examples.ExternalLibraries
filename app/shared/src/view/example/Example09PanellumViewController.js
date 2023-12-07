Ext.define('ExtJsExamples.view.ex.Example09PanellumViewController', {
    extend: 'ExtJsExamples.view.ex.Example07RenderToBodyBaseViewController',
    alias: 'controller.ex09-panellum-view',

    requires: [
        'ExtJsExamples.util.Loader'
    ],

    init: function () {
        this.callParent(arguments);
    },

    getPanoramaUri: function(){
        let vw = this.getView(),
            panoramaUri = vw.getPanoramaUri(),
            autoLoad = vw.getAutoLoad();

        if(autoLoad){
            panoramaUri += '&amp;autoLoad=true'
        }

        return panoramaUri;
    },

    /**
     * creates a hosting container for external UI
     * @param hostingContainerId
     * @returns string
     */
    getHostingContainerHtml: function(hostingContainerId){
        return `<iframe style="position: absolute; width: 100%; height: 100%;" id="${hostingContainerId}" src="${this.getPanoramaUri()}"/>`;
    },

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
