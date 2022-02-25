/**
    Created by Sean Whitley
    Team AuraForce
    Revature, 20220118 Cohort
 */

import { LightningElement, wire } from 'lwc';
import { refreshApex } from "@salesforce/apex";
import getProducts from "@salesforce/apex/ProductsController.getProducts";

// Columns defined for the Datatable
const DATA_COLUMNS = [
    { label: 'Title', fieldName: 'Name', sortable: true },
    { label: 'Author', fieldName: 'Author__c' },
    { label: 'Genre', fieldName: 'Genre__c' },
    { label: 'Page Count', fieldName: 'Page_Count__c', type: 'number' },
    { label: 'Description', fieldName: 'Description__c' },
    { label: 'Stock', fieldName: 'Current_Stock__c', type: 'number' }
];

export default class ListingComponent extends LightningElement {

    objectApiName = 'Product2';                 // We use Product2 standard object to store book records
    bookRecordTypeId = '0128c000002ATA9AAO';    // Book record type of Product2 object
    dataColumns = DATA_COLUMNS;                 // Column labels for lightning-datatable
    recordId;                                   // To hold recordId of selected record
    isShowingEditForm = false;                  // Datatable -or- edit form

    @wire(getProducts)
    listings;

    // Button label conditional rendering
    get buttonLabel() {
        
        if (this.isShowingEditForm) {
            return 'Cancel';
        } else if (this.recordId) {
            return 'Edit'
        }

        return 'Add';
    }

    // Handler for card action button (top right of component)
    handleNewRecordAction() {
        // Switch between Datatable and Create/Edit form
        this.isShowingEditForm = this.isShowingEditForm ? false : true;
        console.log(this.isShowingEditForm);
    }

    // Handler for successful record creation in record-edit-form
    refreshListings() {
        refreshApex(this.listings);
        this.isShowingEditForm = false;
        this.recordId = '';
    }

    // Called when record row is selected
    setSelectedRecordId(event) {
        this.recordId = event.detail.selectedRows[0];
    }
}