
Ext.define('GUI.controller.Login',{
    extend: 'Ext.app.Controller',

    views: [
        'login.Form'
    ],
	
	refs: [
           {
               ref: 'loginForm',
               selector: 'form'
           },
           {
           ref: 'loginButton',
           selector: 'loginform button[action=login]'
           },
    ],

    init: function(){
        this.control({
            'viewport > loginform' : {
                render: this.onPanelRendered
            },
			'loginform button[action=login]': {
				click: function(button){
					var loginButton = button;
             
			this.getLoginForm().form.submit({
                        waitMsg:'Logining in...',
                        url: 'login',
                        method: 'POST',
                        success: function(form,action) {
				console.log("Success");
				var redirect = '/main'; 
		                window.location = redirect;
                        },
                        failure: function(form,action){
                            Ext.MessageBox.alert('Error', "Invalid username/password");
                        }
			});
				}
            }
        });
    },

    onPanelRendered: function(){
        console.log('The panel was rendered');
    }
});