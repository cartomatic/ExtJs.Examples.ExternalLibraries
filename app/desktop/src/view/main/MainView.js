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
				},
				{
					xtype: 'ex05-reusable-map-component',
					lo: 0.00087,
					la: 51.47733,
					zoom: 14
				},
				{
					xtype: 'ex06-reusable-3d-map-component'
				},
				{
					xtype: 'panel',
					title: 'SideBySide',
					layout: {
						type: 'hbox',
						align: 'stretch'
					},
					defaults: {
						flex: 1
					},
					items: [
						{
							xtype: 'ex05-reusable-map-component',
							lo: 0.00087,
							la: 51.47733,
							zoom: 14
						},
						{
							xtype: 'ex06-reusable-3d-map-component'
						}
					]
				},
				{
					xtype: 'ex08-street-view-view'
				},
				{
					xtype: 'panel',
					title: 'Panellum',
					layout: {
						type: 'hbox',
						align: 'stretch'
					},
					defaults: {
						flex: 1
					},
					items: [
						{
							xtype: 'ex09-panellum-view',
							title: 'Alma - Auto Load'
						},
						{
							xtype: 'ex09-panellum-view',
							title: 'Cerro Toco - manual load',
							panoramaUri: 'https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/cerro-toco-0.jpg',
							autoLoad: false
						}
					]
				},
				{
					xtype: 'ex10-ckeditor-view'
				}
			]
		}
	]

});
