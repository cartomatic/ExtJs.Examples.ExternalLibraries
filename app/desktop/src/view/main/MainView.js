Ext.define('ExtJsExamples.view.main.MainView', {
	extend: 'Ext.panel.Panel',
	xtype: 'main-view',
	reference: 'main-view',
	controller: 'main-view',
	viewModel: {
		type: 'main-view'
	},
	fullscreen: 'true',

	layout: 'fit',

	title: 'Examples',

	items: [
		{
			xtype: 'tabpanel',
			items: [
				{
					xtype: 'ex01-view-web-pack-require-view'
				}
			]
		}
	]

});
