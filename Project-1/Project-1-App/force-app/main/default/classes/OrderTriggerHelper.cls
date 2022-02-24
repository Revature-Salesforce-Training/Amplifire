public with sharing class OrderTriggerHelper {
    public static void addOrderToDelivery(List<Order> orderList) {
        List<Delivery__c> newDeliv = new List<Delivery__c>();

    for(Order o: orderList){
        
        Delivery__c d = new Delivery__c();

         d.ShippingStreet__c = o.ShippingStreet;
         d.Shipping_City__c = o.ShippingCity;
         d.ShippingCountry__c = o.ShippingCountry;
         d.ShippingPostalCode__c = o.ShippingPostalCode;
         d.ShippingState__c = o.ShippingState;
         d.Order__c = o.Id;

        newDeliv.add(d);
    } try {
        insert newDeliv;
    } catch(DmlException e){
        System.debug(e);
    }
    
    }
}
