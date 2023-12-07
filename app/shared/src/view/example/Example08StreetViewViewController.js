Ext.define('ExtJsExamples.view.ex.Example08StreetViewViewController', {
    extend: 'ExtJsExamples.view.ex.Example07RenderToBodyBaseViewController',
    alias: 'controller.ex08-street-view-view',

    requires: [
        'ExtJsExamples.util.Loader',
        'ExtJsExamples.util.ApiKeys'
    ],

    init: function () {
        this.callParent(arguments);
    },

    getStreetEmbeddedViewUri: function(){
        let vw = this.getView(),
            lo = vw.getLo(),
            la = vw.getLa();

        return `https://www.google.com/maps/embed/v1/streetview?key=${ExtJsExamples.util.ApiKeys.getApiKey('gMaps')}&location=${lo},${la}`;
    },

    /**
     * creates a hosting container for external UI
     * @param hostingContainerId
     * @returns string
     */
    getHostingContainerHtml: function(hostingContainerId){
        return `<iframe style="position: absolute; width: 100%; height: 100%;" id="${hostingContainerId}" src="${this.getStreetEmbeddedViewUri()}"/>`;
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
