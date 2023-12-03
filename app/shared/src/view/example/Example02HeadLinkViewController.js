Ext.define('ExtJsExamples.view.ex.Example02HeadLinkViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ex02-head-link-view',

    init: function () {
    },

    renderMap: function(btn){

        btn.disable();

        //leaflet-map
        let map = L.map('leaflet-map').setView([51.505, -0.09], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

    }

});
