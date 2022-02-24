/*
*	Author:- Gabriel Anton
*	Description:- Apex Class to sort orders by status, delivery, price, and retrieve
*   the orders for a particular product as well filtering by status
*	Created:- 2/22/22
*/

public with sharing class OrderController {
    
    @AuraEnabled(cacheable=true)
    public static List<Order> retrieveOrders() {
        return 
        [SELECT Status, ShippingAddress, Pricebook2Id, Delivery__c, OrderNumber 
        FROM Order];
    }

    @AuraEnabled(cacheable=true)
    public static List<Order> retrieveDeliveries() {
        return 
        [SELECT Delivery_Status__c, Shipping_City__c, ShippingCountry__c, ShippingPostalCode__c, ShippingState__c, ShippingStreet__c, Order__c
        FROM Delivery__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<Order> retrievePendingOrders() {
        return 
        [SELECT Status, ShippingAddress, Pricebook2Id, Delivery__c 
        FROM Order where Delivery__r.Delivery_Status__c = 'Pending'];
    }

    @AuraEnabled(cacheable=true)
    public static List<Order> retrieveCompletedOrders() {
        return 
        [SELECT Status, ShippingAddress, Pricebook2Id, Delivery__c 
        FROM Order where Delivery__r.Delivery_Status__c = 'Delivered'];
    }

    @AuraEnabled(cacheable=true)
    public static List<OrderItem> retrieveOrdersWithTitle(String title) {
       return 
       [SELECT Order.Status, Order.ShippingAddress, Order.Pricebook2Id, Order.Delivery__c 
        FROM OrderItem 
        WHERE Product2.Name=:title];
        
        
    }
}
