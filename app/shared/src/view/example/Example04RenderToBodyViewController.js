Ext.define('ExtJsExamples.view.ex.Example04RenderToBodyViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ex04-render-to-body-view',

    requires: [
        'ExtJsExamples.util.Loader'
    ],

    init: function () {

        switch(Ext.toolkit){
            case 'classic':
                this.getView().on('render', this.onRender, this); //renders in the background as a markup, so no explicit sizing yet
                //this.getView().on('afterlayout', this.onRender, this, {single: true}); //fires after the layout, so map should adjust nicely to the actual sizing
                break;

            case 'modern':
                //this.getView().on('painted', this.onPainted, this); //this keeps on firing on re-paint!
                this.getView().on('painted', this.onPainted, this, {single: true}); //this fires once only
                break;

            default:
                throw new Error('Unknown ExtJs toolkit');
        }
    },

    onRender: function(sender, eOpts){
        console.log('render');

        let mapContainerId = this.generateMapContainerId();

        //render map holder into container's el
        Ext.get(sender.getEl().dom.id + '-bodyWrap').dom.innerHTML =
            '<div id="' + mapContainerId + '" style="position:absolute; overflow: hidden; width: 100%; height: 100%;"></div>';

        this.createMap(mapContainerId);

        sender.on('resize', this.onViewResize, this);
    },

    onPainted: function(sender, element, eOpts){
        console.log('painted');

        let mapContainerId = this.generateMapContainerId();

        //render map holder into container's el
        //e.el.dom starts with extjs 6.5
        (sender.dom || sender.el.dom).children[1].innerHTML =
            '<div id="' + mapContainerId + '" style="position:absolute; overflow: hidden; width: 100%; height: 100%;"></div>';

        this.createMap(mapContainerId);

        sender.on('resize', this.onViewResize, this);
    },

    /**
     * @private
     */
    map: null,

    /**
     * generates mao container id
     * @private
     * @returns {string}
     */
    generateMapContainerId: function(){
        return 'map_' + new Date().getTime();
    },

    /**
     * creates a map and renders it to the specified containerId
     * @param mapContainerId
     */
    createMap: function(mapContainerId){
        this.map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            target: mapContainerId,
            controls: ol.control.defaults.defaults({
                attributionOptions: {
                    collapsible: false
                }
            }).extend([
                new ol.control.ScaleLine()
                //<debug>
                ,new ol.control.MousePosition({
                    projection: ol.proj.get('EPSG:4326'),
                    coordinateFormat: function (coords) {
                        let output = '';
                        if (coords) {
                            output = coords[0].toFixed(5) + ' : ' + coords[1].toFixed(5);
                        }
                        return output;
                    }
                })
                //</debug>
            ]),
            view: new ol.View({
                center: [2340195, 6837328],
                zoom: 15
            })
        });

        this.getView().fireEvent('mapcontainer::mapcreated', this.map);
    },

    /**
     * container resize, so can monitor map size too
     */
    onViewResize: function(){
        if(this.map) {
            this.map.updateSize();
        }
    }
});
