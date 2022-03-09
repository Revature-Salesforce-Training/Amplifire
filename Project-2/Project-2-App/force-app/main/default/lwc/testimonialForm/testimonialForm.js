import { LightningElement,api,wire } from 'lwc';
import Account from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import Testimonial__c from '@salesforce/schema/Account.Testimonial__c';
import updateTestimonialHelper from '@salesforce/apex/UpdateTestimonialController.updateTestimonialHelper';


export default class TestimonialForm extends LightningElement {
    nameField=NAME_FIELD;
    testimonial=Testimonial__c;
    submitBtnLabel;

    @api nameField;
    @api Account;

    @wire(updateTestimonialHelper) success;
    
    handleSubmit(event){
        this.submitBtnLabel=event.target.label;
    }
}