/*
 * File: app.js
 * Date: Fri Mar 23 2012 14:43:03 GMT-0600 (Mountain Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'GUI',
	appFolder: 'gui/mainWindow',

    controllers: [
        'Discussions',
        'IM',
        'Main'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
		
			layout: {
				type: 'border',
				padding: 5
			},
			defaults: {
				split: true
			},
            items: [
				 {
					region: 'north',
					title: 'Calgary Emergency Medicine'
				},
                {
                    xtype: 'mainpanel',
                    region: 'center',
					border: false
                },
                {
                    xtype: 'impanel',
                    region: 'east',
                    collapsible: true
                }
            ]
        });
    }
});
