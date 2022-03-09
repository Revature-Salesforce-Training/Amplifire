/*
*	Author:- Drew Williams
*	Description:- Data table that displays the current Accounts
*	Date: 3/8/22
*/
({
    helperMethod : function(){}
    ({
        getData : function(cmp) {
            var action = cmp.get('c.TableController');
            action.setCallback(this, $A.getCallback(function (response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    cmp.set('v.mydata', response.getReturnValue());
                } else if (state === "ERROR") {
                    var errors = response.getError();
                    console.error(errors);
                }
            }));
            $A.enqueueAction(action);
        }
    })
    
})
