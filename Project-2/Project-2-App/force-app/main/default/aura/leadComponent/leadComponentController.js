({


    // init : function(component, event) {
    //     var action = component.get("c.retrieveAllLeads");
    //     action.setCallback(this, function(response){
    //         var state = response.getState();
    //         if (state === "SUCCESS") {
    //             component.set("v.all_leads", response.getReturnValue());
    //         }
    //     });
    //     $A.enqueueAction(action);
    // },


    handleOpen : function(component, event, helper){
        helper.displayOpenLeads(component);
    

    },

    handleLost : function(component, event, helper){
        helper.displayLostLeads(component);
    

    },

    handleAll : function(component, event, helper){
        helper.displayAllLeads(component);
    
    }
})
