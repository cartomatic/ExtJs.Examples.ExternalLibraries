Ext.define('ExtJsExamples.view.ex.Example03ExtDefineLinkViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ex03-ext-define-link-view',

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
    const head = document.getElementsByTagName("head")[0],
        fragment = document.createDocumentFragment();

    const script  = document.createElement('script');
    script.type = 'text/javascript';
    script.src  = 'https://maps.googleapis.com/maps/api/js?key=';//note: maps api key is required in order to use google maps

    const callback = () => {
        console.log('GoogleMaps script loaded :)');
    }

    //IE has a different way of handling <script> loads, so we need to check for it here
    if(script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = callback;
    }

    fragment.appendChild(script);
    head.appendChild(fragment);

});
