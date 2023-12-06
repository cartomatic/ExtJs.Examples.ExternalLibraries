Ext.define('ExtJsExamples.view.ex.Example03ExtDefineLinkViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ex03-ext-define-link-view',

    requires: [
        'ExtJsExamples.util.Loader'
    ],

    init: function () {
    },

    renderMap: function(btn){

        btn.disable();

        //gmaps-map
        let map = new google.maps.Map(
            document.getElementById('google-map'),
            {
                center: {lat: 51.505, lng: -0.09},
                zoom: 8
            }
        );
    }
}, () => {
    ExtJsExamples.util.Loader.load({
        fileList: [
            'https://maps.googleapis.com/maps/api/js?key=' //note: maps api key is required in order to use google maps
        ],
        callback: () => {console.log("GoogleMaps script loaded :)")}
    });
});
