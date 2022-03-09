({
    myAction : function(component, event, helper) {
        component.set("v.Columns", [
            {label:"Name", fieldName:"Name", type:"text"},
            {label:"Testimonial", fieldName:"Testimonial__c", type:"text"},
        ]);
        
        var action = component.get("c.getAccounts");
        action.setParams({recordId: component.get("v.recordId")
});
        action.setCallback(this, function(data) {
        component.set("v.Accounts", data.getReturnValue());
});
$A.enqueueAction(action);
    }
})
