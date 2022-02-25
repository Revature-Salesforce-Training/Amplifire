trigger OrderTrigger on Order (after insert, after update) {
    OrderTriggerHelper.addOrderToDelivery(Trigger.new);
}