/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 29/03/12
 * Time: 11:41 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('GUI.view.discussions.PostThreadWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.postthreadnwindow',

    title: 'Start New Thread',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items : [
                    {
                        xtype: 'textfield',
                        name: 'title',
                        id: 'title',
                        fieldLabel: 'Title'
                    },
                    {
                        xtype: 'textfield',
                        name: 'body',
                        id: 'body',
                        fieldLabel: 'Body'
                    }
                ]
            }
        ]
    }
});