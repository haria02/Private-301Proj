Ext.define('GUI.view.login.Form' ,{
    extend: 'Ext.form.FormPanel',
    alias : 'widget.loginform',
 
    frame: true,
    title: 'User Login',
    bodyPadding: '5px 5px 0',
    width: 250,
    height: 120,
    fieldDefaults: {
        labelWidth: 100,
        msgTarget: 'side',
        autoFitErrors: false
    },
    defaults: {
        width: 200,
        inputType: 'password',
		allowBlank: false
    },
    defaultType: 'textfield',
    
    initComponent: function() {
        this.buttons = [
        {
			name: 'loginButton',
            text: 'Login',
            action: 'login',
			formBind: true
        }
        ];
        
        this.items = [
        {
            fieldLabel: 'UserID',
            name: 'userid',
            id: 'userid',
            inputType: 'text',
        },
        {
            fieldLabel: 'Password',
            name: 'password'
        }
        ];
        
        this.callParent(arguments);
    }
});