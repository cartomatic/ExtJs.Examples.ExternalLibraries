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
			xtype: 'ex01-web-pack-require-view'
		},
		{
			xtype: 'ex02-head-link-view'
		},
		{
			xtype: 'ex03-ext-define-link-view'
		},
		{
			xtype: 'ex04-render-to-body-view'
		}
	]
});
