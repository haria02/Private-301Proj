Ext.define('GUI.view.im.IM_Tab_Panel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.impanel',

    width: 280,

    activeTab: 0,

    title: 'Instant Messaging',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    title: 'Recent',
                    dockedItems: [
                        {
                            xtype: 'form',
                            height: '90%',
                            bodyPadding: 10,
                            title: 'Recent messages'
                        },
                        {
                            xtype: 'textareafield',
                            height: '10%',
                            width: 241,
                            fieldLabel: '',
                            labelWidth: 0,
                            dock: 'left'
                        },
                        {
                            xtype: 'button',
                            text: 'Send',
                            dock: 'right'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Last day',
                    items: [
                        {
                            xtype: 'form',
                            height: 773,
                            bodyPadding: 10,
                            title: 'Messages from the last day'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Last week',
                    items: [
                        {
                            xtype: 'form',
                            height: 773,
                            bodyPadding: 10,
                            title: 'Messages from the last week'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    width: 312,
                    title: 'Older',
                    items: [
                        {
                            xtype: 'form',
                            height: 773,
                            bodyPadding: 10,
                            title: 'Older messages'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});