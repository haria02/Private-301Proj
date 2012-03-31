Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});

Ext.application({
    name: 'GUI',
    appFolder: 'gui/login',
    controllers: [
        'Login'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
					items: [{xtype: 'loginform'}]
        });
    }
});