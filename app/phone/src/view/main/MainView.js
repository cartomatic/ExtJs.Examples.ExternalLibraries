Ext.define('ExtJsExamples.view.main.MainView', {
	extend: 'Ext.carousel.Carousel',
	xtype: 'main-view',
	reference: 'main-view',
	controller: 'main-view',
	viewModel: {
		type: 'main-view'
	},

	items: [
		{
			xtype: 'ex01-view-web-pack-require-view'
		}
	]
});
