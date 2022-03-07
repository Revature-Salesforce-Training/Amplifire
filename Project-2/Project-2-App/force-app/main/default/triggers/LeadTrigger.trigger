trigger LeadTrigger on Lead (after update) {
    LeadTriggerHelper.createNewContact(Trigger.new);

}