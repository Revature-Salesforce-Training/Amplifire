trigger ProductTrigger on Product2 (
    before insert, before update, before delete, 
    after insert, after update, after delete, after undelete
) {
    ProductTriggerHelper.handleTrigger(Trigger.new, Trigger.old, Trigger.operationType);
}