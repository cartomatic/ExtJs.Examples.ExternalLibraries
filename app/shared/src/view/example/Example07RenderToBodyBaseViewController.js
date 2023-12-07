Ext.define('ExtJsExamples.view.ex.Example07RenderToBodyBaseViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ex07-render-to-body-base-view',

    requires: [
        'ExtJsExamples.util.Loader'
    ],

    init: function () {

        switch(Ext.toolkit){
            case 'classic':
                this.getView().on('render', this.initHostingContainer, this);
                break;

            case 'modern':
                this.getView().on('painted', this.initHostingContainer, this, {single: true});
                break;

            default:
                throw new Error('Unknown ExtJs toolkit');
        }
    },

    initHostingContainer: function(sender){
        let hostingContainerId = this.generateHostingContainerId();

        console.log('sender', sender);

        //render map holder into panel's body
        //body for classic, bodyElement for modern
        (sender.body || sender.bodyElement).dom.innerHTML = this.getHostingContainerHtml();

        this.createUI(hostingContainerId);

        sender.on('resize', this.onViewResize, this);
    },

    /**
     * creates a hosting container for external UI
     * @param hostingContainerId
     * @returns {string}
     */
    getHostingContainerHtml: function(hostingContainerId){
        return '<div id="' + hostingContainerId + '" style="position:absolute; overflow: hidden; width: 100%; height: 100%;"></div>';
    },

    /**
     * generates mao container id
     * @private
     * @returns {string}
     */
    generateHostingContainerId: function(){
        return 'hostingContainer_' + new Date().getTime();
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
