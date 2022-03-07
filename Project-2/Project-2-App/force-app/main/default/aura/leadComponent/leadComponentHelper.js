({
    

    displayOpenLeads : function(component) {
        var method = component.get("c.retrieveAllOpenLeads");
        component.set("v.isOpenLeads", true);
        component.set("v.isWorkingLeads", false);
        component.set("v.isLostLeads", false);
        //no params required in this example
        method.setCallback(this, function(response){
            if(response.getState() == "SUCCESS"){
                component.set("v.open_leads", response.getReturnValue());
                console.log("Open Leads Method");
                
            }

        });
        $A.enqueueAction(method);

    },

    displayLostLeads : function(component) {
        var method = component.get("c.retrieveAllUncovertedLeads");
        component.set("v.isOpenLeads", false);
        component.set("v.isWorkingLeads", false);
        component.set("v.isLostLeads", true);
        //no params required in this example
        method.setCallback(this, function(response){
            
            if(response.getState() == "SUCCESS"){
                component.set("v.lost_leads", response.getReturnValue());
                console.log("Lost Leads Method");
                
            }

        });
        $A.enqueueAction(method);
    },

    displayAllLeads : function(component) {
        var action = component.get("c.retrieveAllWorkingLeads");
        component.set("v.isOpenLeads", false);
        component.set("v.isWorkingLeads", true);
        component.set("v.isLostLeads", false);
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.working_leads", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})
