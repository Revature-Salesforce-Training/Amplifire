// <!-- 

// Author: Gabriel Anton 
// Date: 3/8/22 
// Description: Lead Component Controller

// -->

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

    handleWorking : function(component, event, helper){
        helper.displayAllLeads(component);
    
    },

    handleMinimize : function(component, event, helper) {
        
            component.set("v.isOpenLeads", false);
            component.set("v.isWorkingLeads", false);
            component.set("v.isLostLeads", false);
        
    },

    handleNewContact : function(component, event, helper){
        helper.fireEvent();
    }
})
