trigger OrderTrigger on Order (after insert) {
    OrderTriggerHelper.addOrderToDelivery(Trigger.new);
}