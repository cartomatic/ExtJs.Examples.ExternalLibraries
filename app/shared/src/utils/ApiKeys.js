(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * Js script, css loader;
     * Modification of http://www.sencha.com/forum/showthread.php?107796-Ext.ux.Loader-Load-js-css-Files-Dynamically
     */
    Ext.define('ExtJsExamples.util.ApiKeys', {

        singleton: true,

        constructor: function(){

            Ext.Ajax.request({
                url: 'resources/shared/apikeys.json',
                method: 'GET',
                callback: Ext.bind(this.onKeysRetrieved, this)
            });
        },

        onKeysRetrieved: function(options, success, response){
            console.log('response', response);
            if(response.responseText){
                this.apiKeys = Ext.JSON.decode(response.responseText);
            }
        },

        apiKeys: {},

        getApiKey: function(api){
            return this.apiKeys[api];
        }

    });

}());