import { LightningElement, wire, api } from 'lwc';
import getProducts from "@salesforce/apex/ProductsController.getProducts";

const DATA_COLUMNS = [
    { label: 'Title', fieldName: 'Name' },
    { label: 'Author', fieldName: 'Author__c' },
    { label: 'Genre', fieldName: 'Genre__c' },
    { label: 'Page Count', fieldName: 'Page_Count__c' },
    { label: 'Description', fieldName: 'Descriptive__c' },
    { label: 'Stock', fieldName: 'Current_Stock__c' }
];

export default class ListingComponent extends LightningElement {

    objectApiName = 'Product2';
    dataColumns = DATA_COLUMNS;     // Column labels for lightning-datatable
    recordId;                       // For button text and edit form conditional rend
    isShowingEditForm = false;      // Datatable -or- edit form

    @wire(getProducts)
    listings;

    @api get buttonLabel() {
        if (this.recordId) {
            return 'Edit'
        } else if (this.isShowingEditForm) {
            return 'Cancel';
        } 

        return 'Add';
    }

    getRecordId() {
        if (this.recordId) {
            return this.recordId;
        }

        return '';
    }

    handleNewRecordAction() {
        this.isShowingEditForm = this.isShowingEditForm ? false : true;
        console.log(this.isShowingEditForm);
    }
}