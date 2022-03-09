/*
*	Author:- Drew Williams
*	Description:- Data table that displays the current Accounts
*	Date: 3/8/22
*/

({
    init : function(component, event, helper) {
        component.set('v.columns', [
        {label: 'Account name', fieldName: 'Name', type: 'text'}, 
        {label: 'Phone', fieldName: 'Phone', type: 'phone'},
        {label: 'Website', fieldName: 'Website', type: 'url', typeAttributes: { target: '_self'}},
    ]);
        var action = component.get('c.getAccount');
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS') {
                var responseValue = response.getReturnValue();
                component.set('v.data', responseValue);
            }
        });
        $A.enqueueAction(action);
    }
})

