Ext.define('ExtJsExamples.view.ex.Example06Reusable3dMapComponentController', {
    extend: 'ExtJsExamples.view.ex.Example05ReusableMapComponentController',
    alias: 'controller.ex06-reusable-3d-map-component',

    requires: [
        'ExtJsExamples.util.Loader'
    ],

    init: function () {
        this.callParent(arguments);
    },

    map3d: null,

    on3dToggle: function(btn, pressed){
        if(!this.map3d){
            this.map3d = new olcs.OLCesium({
                map: this.map
            });
        }
        this.map3d.setEnabled(pressed);
    }
});
