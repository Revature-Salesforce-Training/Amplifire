/*
*	Author:- Gabriel Anton
*	Description:- Apex Class to sort orders by status, delivery, price, and retrieve
*   the orders for a particular product as well filtering by status
*	Created:- 2/22/22
*/

public class OrderController {
    

    public static List<Order> retrieveOrders() {
        return 
        [SELECT Status, ShippingAddress, Pricebook2Id, Delivery__c 
        FROM Order 
        GROUP BY Status, Delivery__c 
        ORDER BY EffectiveDate];
    }

    public static List<Order> retrievePendingOrders() {
        return 
        [SELECT Status, ShippingAddress, Pricebook2Id, Delivery__c 
        FROM Order where Delivery__r.Delivery_Status__c = 'Pending'];
    }

    public static List<Order> retrieveTitleWithOrders(String title) {
        List<Order> orders;

         if(
            Order.SObjectType.getDescribe().isAccessible() &&
            Schema.SObjectType.Order.fields.Status.isAccessible() &&
            Schema.SObjectType.Order.fields.ShippingAddress.isAccessible() &&
            Schema.SObjectType.Order.fields.Delivery__c.isAccessible() &&
            Schema.SObjectType.Order.fields.PricebookId.isAccessible() 
        ){
            orders = 
                [SELECT OrderId, Order.Status, Order.ShippingAddress, Order.Pricebook2Id, Order.Delivery__c 
                FROM OrderItem 
                WHERE Product2.Name=:title];
        }
        return orders;
        
        
    }
}
