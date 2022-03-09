public with sharing class UpdateTestimonialController {
    @AuraEnabled(cacheable=true)
    public static Boolean updateTestimonialHelper(String acctName, String Testimonial){
        //programmatically update a standard object
        Account acctToUpdate;
        try {
            acctToUpdate = 
                [SELECT Name,Testimonial__c FROM Account 
                 WHERE Name= :acctName];
            // Update the testimonial
            acctToUpdate.Testimonial__c = Testimonial;
            // Make the update call.
            update acctToUpdate;
        } catch(DmlException e) {
            System.debug('An unexpected error has occurred: ' + e.getMessage());
        }
    }
}
