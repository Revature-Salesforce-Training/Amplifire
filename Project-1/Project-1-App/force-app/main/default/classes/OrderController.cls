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
    public static List<Order> retrievePendingOrders() {
        return 
        [SELECT Status, ShippingAddress, Pricebook2Id, Delivery__c 
        FROM Order where Delivery__r.Delivery_Status__c = 'Pending'];
    }

    @AuraEnabled(cacheable=true)
    public static List<OrderItem> retrieveOrdersWithTitle(String title) {
       return 
       [SELECT Order.Status, Order.ShippingAddress, Order.Pricebook2Id, Order.Delivery__c 
        FROM OrderItem 
        WHERE Product2.Name=:title];
        
        
    }
}
