trigger DupeAccountTrigger on Account (before insert) {
    DupeAccountTriggerHelper.DupeAccount(Trigger.new);
}