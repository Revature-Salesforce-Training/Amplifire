trigger LeadTrigger on Lead (after update) {
    switch on Trigger.operationType {
        when BEFORE_INSERT, BEFORE_UPDATE {
            LeadTriggerHelper.createNewContact(Trigger.new);
            
            // Validation
            NewLeadTriggerHelper.checkForTwitterUsername(Trigger.new);
        }
    }
}