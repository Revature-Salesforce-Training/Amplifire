/*
*	Author:- Gabriel Anton
*	Description:- 
*	Created:- 2/22/22

Status, ShippingAddress, Pricebook2Id, Delivery__c
*/

import { LightningElement, wire } from 'lwc';

import retrieveOrders from '@salesforce/apex/OrderController.retrieveOrders';
import retrieveDeliveries from '@salesforce/apex/OrderController.retrieveDeliveries';
import retrieveOrdersWithTitle from '@salesforce/apex/OrderController.retrieveOrdersWithTitle';
import retrievePendingOrders from '@salesforce/apex/OrderController.retrievePendingOrders';
import retrieveCompletedOrders from '@salesforce/apex/OrderController.retrieveCompletedOrders';

import ORDER_OBJECT from '@salesforce/schema/Order';
import STATUS_FIELD from '@salesforce/schema/Order.Status';
import SHIPPINGADDRESS_FIELD from '@salesforce/schema/Order.ShippingAddress';
import PRICEBOOK2ID_FIELD from '@salesforce/schema/Order.Pricebook2Id';
import DELIVERY_FIELD from '@salesforce/schema/Order.Delivery__c';

import ORDERITEM_OBJECT from '@salesforce/schema/OrderItem'
import ORDER_STATUS_FIELD from '@salesforce/schema/OrderItem.Order.Status'
import ORDER_SHIPPINGADDRESS_FIELD from '@salesforce/schema/OrderItem.Order.ShippingAddress'
import ORDER_PRICEBOOK2ID_FIELD from '@salesforce/schema/OrderItem.Order.Pricebook2Id';
import ORDER_DELIVERY_FIELD from '@salesforce/schema/OrderItem.Order.Delivery__c';
import ORDERID_FIELD from '@salesforce/schema/OrderItem.OrderID';

export default class OrderPage extends LightningElement {

    searchTitle;
    titleIsSearched = false;
    pendingIsSelected = false;

    orderApi = ORDER_OBJECT;
    orderitemApi = ORDERITEM_OBJECT;
    order_fields = [STATUS_FIELD, SHIPPINGADDRESS_FIELD, PRICEBOOK2ID_FIELD, DELIVERY_FIELD];
    order_item_fields = [ORDERID_FIELD, ORDER_STATUS_FIELD, ORDER_SHIPPINGADDRESS_FIELD, ORDER_PRICEBOOK2ID_FIELD, ORDER_DELIVERY_FIELD]
    
    handleInput(e){
        this.searchTitle= e.target.value;
        this.titleIsSearched = true;
        
    }

    handlePending(){
        this.pendingIsSelected = true;
    }

    handleAll(){
        this.pendingIsSelected = false;
        console.log("Titles with orders: ", this.orders_with_title);
        console.log(this.order_item_fields);
    }

    clearSearch(){
        // this.shadowRoot.querySelector('input').innerText = '';
        this.titleIsSearched = !this.titleIsSearched;
    }

    connectedCallback(){
        console.log(this.orders);
        
    }

    @wire(retrieveOrders)
    orders;

    @wire(retrievePendingOrders)
    pending_orders;

    @wire(retrieveOrdersWithTitle, {title: '$searchTitle'})
    orders_with_title;

    @wire(retrieveCompletedOrders)
    completed_orders;

    @wire(retrieveDeliveries)
    deliveries;


}