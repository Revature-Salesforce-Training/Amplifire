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
    { label: 'Title', fieldName: 'Name', sortable: true, initialWidth: 300 },
    { label: 'Author', fieldName: 'Author__c', initialWidth: 200 },
    { label: 'Genre', fieldName: 'Genre__c', initialWidth: 125 },
    { label: 'Page Count', fieldName: 'Page_Count__c', type: 'number', initialWidth: 100 },
    { label: 'Stock', fieldName: 'Current_Stock__c', type: 'number', initialWidth: 100 },
    { label: 'Description', fieldName: 'Description__c' }
];

export default class ListingComponent extends LightningElement {

    objectApiName = 'Product2';                 // We use Product2 standard object to store book records
    bookRecordTypeId = '0128c000002ATA9AAO';    // Book record type of Product2 object
    dataColumns = DATA_COLUMNS;                 // Column labels for lightning-datatable
    recordId;                                   // To hold recordId of selected record
    isShowingDataTable = true;                  // Datatable -or-
    isShowingEditForm = false;                  // Edit form -or-
    isShowingCaseForm = false;                  // Web-to-Case form

    @wire(getProducts)
    listings;

    // Button label conditional rendering
    get buttonLabel() {
        
        if (this.isShowingEditForm || this.isShowingCaseForm) {
            return 'Cancel';
        } else if (this.recordId) {
            return 'Edit'
        }

        return 'Add';
    }

    handleCreateDispute() {
        this.isShowingDataTable = false;
        this.isShowingEditForm = false;
        this.isShowingCaseForm = true;
    }

    // Handler for card action button (top right of component)
    handleNewRecordAction() {
        if (this.isShowingCaseForm || this.isShowingEditForm) {
            this.isShowingDataTable = true;
            this.isShowingEditForm = false;
            this.isShowingCaseForm = false;
        } else if (this.isShowingDataTable) {
            this.isShowingDataTable = false;
            this.isShowingEditForm = true;
            this.isShowingCaseForm = false;
        }
    }

    // Handler for successful record creation in record-edit-form
    refreshListings() {
        refreshApex(this.listings);
        this.isShowingEditForm = false;
        this.recordId = '';
    }

    // Called when record row is selected
    setSelectedRecordId(event) {
        this.recordId = event.detail.selectedRows[0].Id;
    }
}