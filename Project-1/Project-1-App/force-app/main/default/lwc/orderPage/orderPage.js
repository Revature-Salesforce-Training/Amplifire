/*
*	Author:- Gabriel Anton
*	Description:- 
*	Created:- 2/22/22

Status, ShippingAddress, Pricebook2Id, Delivery__c
*/

const order_fields = [
        { label: 'Number', fieldName: 'OrderNumber' },
        { label: 'Status', fieldName: 'Status'},
        { label: 'ShippingAddress', fieldName: 'ShippingAddress'},
        { label: 'Pricebook', fieldName: 'Pricebook2Id' },

    ];

const delivery_fields = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'ShippingStreet', fieldName: 'ShippingStreet__c'},
        { label: 'ShippingCity', fieldName: 'Shipping_City__c'},
        { label: 'ShippingPostalCode', fieldName: 'ShippingPostalCode__c'},
        { label: 'ShippingState', fieldName: 'ShippingState__c'},
        { label: 'ShippingCountry', fieldName: 'ShippingCountry__c'},
        { label: 'Pricebook', fieldName: 'Pricebook2Id' },
    ];

const order_item_fields = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Number', fieldName: 'Order.OrderNumber'},
    { label: 'ShippingAddress', fieldName: 'Order.ShippingAddress'},
    { label: 'Pricebook', fieldName: 'Order.Pricebook2Id' },
];

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

import DELIVERY_OBJECT from '@salesforce/schema/Delivery__c';
import DELIVERY_SHIPPINGCITY_FIELD from '@salesforce/schema/Delivery__c.Shipping_City__c';
import DELIVERY_SHIPPINGSTREET_FIELD from '@salesforce/schema/Delivery__c.ShippingStreet__c';
import DELIVERY_SHIPPINGPOSTALCODE_FIELD from '@salesforce/schema/Delivery__c.ShippingPostalCode__c';
import DELIVERY_SHIPPINGSTATE_FIELD from '@salesforce/schema/Delivery__c.ShippingState__c';
import DELIVERY_SHIPPINGCOUNTRY_FIELD from '@salesforce/schema/Delivery__c.ShippingCountry__c';

export default class OrderPage extends LightningElement {

    

    searchTitle;
    titleIsSearched = false;
    pendingIsSelected = false;
    completedIsSelected = false;
    allIsSelected = true;

    orderApi = ORDER_OBJECT;
    orderitemApi = ORDERITEM_OBJECT;
    // order_fields = [STATUS_FIELD, SHIPPINGADDRESS_FIELD, PRICEBOOK2ID_FIELD, DELIVERY_FIELD];
    orderfields = order_fields;
    // order_item_fields = [ORDERID_FIELD, ORDER_STATUS_FIELD, ORDER_SHIPPINGADDRESS_FIELD, ORDER_PRICEBOOK2ID_FIELD, ORDER_DELIVERY_FIELD]
    orderitemfields = order_item_fields;
    // delivery_fields = [DELIVERY_SHIPPINGCITY_FIELD, DELIVERY_SHIPPINGSTREET_FIELD, DELIVERY_SHIPPINGPOSTALCODE_FIELD, DELIVERY_SHIPPINGSTATE_FIELD, DELIVERY_SHIPPINGCOUNTRY_FIELD]
    deliveryfields = delivery_fields;

    handleInput(e){
        this.searchTitle= e.target.value;
        this.titleIsSearched = true;
    }

    handleCompleted(){
        this.completedIsSelected = true;
        this.pendingIsSelected = false;
        this.allIsSelected = false;
    }

    handlePending(){
        this.pendingIsSelected = true;
        this.completedIsSelected = false;
        this.allIsSelected = false;
    }

    handleAll(){
        this.allIsSelected = true;
        this.completedIsSelected = false;
        this.pendingIsSelected = false;
        console.log("Titles with orders: ", this.orders_with_title);
        console.log(this.order_item_fields);
    }

    clearSearch(){
        this.stemplate.querySelector('input').innerText = '';
        
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