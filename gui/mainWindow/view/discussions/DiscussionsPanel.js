Ext.define('GUI.view.discussions.DiscussionsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.discussionspanel',

    title: 'Discussions',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'tabpanel',
                    width: 200,
                    activeTab: 0,
                    dock: 'left',
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Topics',
                            items: [
                                {
                                    xtype: 'treepanel',
                                    width: 200,
                                    title: 'Topics',
                                    viewConfig: {

                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Questions',
                            items: [
                                {
                                    xtype: 'treepanel',
                                    width: 200,
                                    title: 'Questions',
                                    viewConfig: {

                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});