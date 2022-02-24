import { LightningElement, wire } from 'lwc';
import queryByName from "@salesforce/apex/ProductsController.queryByName";

export default class ListingComponent extends LightningElement {

    queryString = '';

    @wire(queryByName, { name: '$queryString' })
    listings;
}