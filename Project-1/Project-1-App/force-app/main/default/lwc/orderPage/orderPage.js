/*
*	Author:- Gabriel Anton
*	Description:- 
*	Created:- 2/22/22


Status, ShippingAddress, Pricebook2Id, Delivery__c
*/

import { LightningElement, wire } from 'lwc';

import retrieveOrders from '@salesforce/apex/OrderController.retrieveOrders';

import ORDER_OBJECT from '@salesforce/schema/Order';
import STATUS_FIELD from '@salesforce/schema/Order.Status';
import SHIPPINGADDRESS_FIELD from '@salesforce/schema/Order.ShippingAddress';
import PRICEBOOK2ID_FIELD from '@salesforce/schema/Order.Pricebook2Id';
import DELIVERY_FIELD from '@salesforce/schema/Order.Delivery__c';

export default class OrderPage extends LightningElement {

    searchString;

    orderApi = ORDER_OBJECT;
    fields = [STATUS_FIELD, SHIPPINGADDRESS_FIELD, PRICEBOOK2ID_FIELD, DELIVERY_FIELD]

    @wire(retrieveOrders, {title: '$searchString'})
    orders;


}