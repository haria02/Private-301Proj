/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 28/03/12
 * Time: 9:07 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('GUI.store.Discussions', {
    extend: 'Ext.data.TreeStore',

    root: {
        text: 'Topics',
        expanded: true,
        children: [
            {
                text: 'Resident Duties',
                expanded: false,
                children: [
                    {
                        text: 'End of day procedure',
                        leaf: true
                    },
                    {
                        text: 'Responsibilities',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Dental',
                expanded: false,
                children: [
                    {
                        text: 'Oral surgery',
                        leaf: true
                    }
                ]
            }
        ]
    },
    folderSort: true,
    sorters: [{
        property: 'text',
        direction: 'ASC'
    }]
});