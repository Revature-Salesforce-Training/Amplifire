trigger CaseTrigger on Case (before insert) {
    if (Trigger.isInsert && Trigger.isBefore) {
    CaseTriggerHelper.addDescription(Trigger.new);
    }
}
