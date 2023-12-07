Ext.define('ExtJsExamples.view.ex.Example03ExtDefineLinkViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ex03-ext-define-link-view',

    requires: [
        'ExtJsExamples.util.Loader',
        'ExtJsExamples.util.ApiKeys'
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

    let linkGmaps = function(){
        let apiKey = ExtJsExamples.util.ApiKeys.getApiKey('gMaps');
        if(!apiKey){
            console.warn('no api keys yet!');
            setTimeout(linkGmaps, 500);
            return;
        }
        ExtJsExamples.util.Loader.load({
            fileList: [
                `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=` //note: maps api key is required in order to use google maps
            ],
            callback: () => {console.log("GoogleMaps script loaded :)")}
        });
    }
    linkGmaps();
});
