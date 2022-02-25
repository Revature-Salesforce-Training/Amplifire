import { LightningElement,wire } from 'lwc';
import Name from '@salesforce/schema/Product2';
import Author__c from '@salesforce/schema/Product2';
import Genre__c from '@salesforce/schema/Product2';
import Page_Count__c from '@salesforce/schema/Product2';
import helperMethod from '@salesforce/apex/RetrieveProductInfoHelper.helperMethod';

const columns = [
    { label: 'Name', fieldName: 'Name'},
    { label: 'Author', fieldName: 'Author__c' },
    { label: 'Genre', fieldName: 'Genre__c' },
    { label: 'Page Count', fieldName: 'Page_Count__c', type: 'number' },   
];

export default class BookStats extends LightningElement {
    columns = columns;
    
    @wire(helperMethod) plist;    
}