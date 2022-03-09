({
    fireNewLeadEvent : function(component, event) {
        var newLeadEvent = $A.get('e.c:newLeadEvent');
        newLeadEvent.setParam('message', 'New Lead created! Check it out!');

        newLeadEvent.fire();
    }
})
