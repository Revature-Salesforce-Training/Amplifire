trigger LeadTrigger on Lead (before insert) {
    
    switch on Trigger.operationType {
        when BEFORE_INSERT, BEFORE_UPDATE {
            // Validation
            NewLeadTriggerHelper.checkForTwitterUsername(Trigger.new);
        }
    }
}