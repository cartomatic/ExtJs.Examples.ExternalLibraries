Ext.define('ExtJsExamples.Application', {
	extend: 'Ext.app.Application',
	name: 'ExtJsExamples',
	requires: [
		'ExtJsExamples.*'
	],
	defaultToken: 'homeview',

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()

		if (Ext.isClassic == true) {
			Ext.create({xtype: 'main-view', plugins: 'viewport'})
		}
		else {
			Ext.Viewport.add([{xtype: 'main-view'}])
		}
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
