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
    public static List<Delivery__c> retrieveDeliveries() {
        return 
        [SELECT Delivery_Status__c, Shipping_City__c, ShippingCountry__c, ShippingPostalCode__c, ShippingState__c, ShippingStreet__c
        FROM Delivery__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<Delivery__c> retrievePendingOrders() {
        return 
        [SELECT Name, Order__r.OrderNumber, Shipping_City__c, ShippingCountry__c, ShippingPostalCode__c, ShippingState__c,  ShippingStreet__c
        FROM Delivery__c 
        WHERE Delivery_Status__c = 'Pending'];
    }

    @AuraEnabled(cacheable=true)
    public static List<Delivery__c> retrieveCompletedOrders() {
        return 
        [SELECT Name, Order__r.OrderNumber, Shipping_City__c, ShippingCountry__c, ShippingPostalCode__c, ShippingState__c,  ShippingStreet__c
        FROM Delivery__c 
        WHERE Delivery_Status__c = 'Delivered'];
    }

    @AuraEnabled(cacheable=true)
    public static List<OrderItem> retrieveOrdersWithTitle(String title) {
       return 
       [SELECT Quantity, Order.Status, Order.ShippingAddress, Order.Pricebook2Id, Order.Delivery__c 
        FROM OrderItem 
        WHERE Product2.Name=:title];
        
    }

    // private static String queryBuilder(String fields, String whereClause) {
    //     // Sanitize strings before building query string
    //     String fieldsSanitized = String.escapeSingleQuotes(fields);
    //     String whereClauseSanitized = String.escapeSingleQuotes(whereClause);

    //     return 'SELECT :fieldsSanitized FROM OrderItem WHERE :whereClauseSanitized,CreatedById=0058c00000ABNVeAAP WITH SECURITY_ENFORCED';
    // }
}
