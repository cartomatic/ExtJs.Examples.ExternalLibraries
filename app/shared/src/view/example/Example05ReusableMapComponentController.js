Ext.define('ExtJsExamples.view.ex.Example05ReusableMapComponentController', {
    extend: 'ExtJsExamples.view.ex.Example04RenderToBodyViewController',
    alias: 'controller.ex05-reusable-map-component',

    requires: [
        'ExtJsExamples.util.Loader'
    ],

    init: function () {
        this.callParent(arguments);

        let vw = this.getView();
        vw.on('mapcontainer::mapcreated', this.onMapCreated, this);
    },

    onMapCreated: function(map){
        //apply zoom and position as configured

        let vw = this.getView(),
            mapVw = map.getView(),
            lo = vw.getLo(),
            la = vw.getLa(),
            zoom = vw.getZoom();

        mapVw.setCenter(ol.proj.transform([lo, la], 'EPSG:4326', 'EPSG:3857'));
        mapVw.setZoom(zoom);
    }
});
