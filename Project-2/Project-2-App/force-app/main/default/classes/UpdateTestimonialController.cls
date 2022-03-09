public with sharing class UpdateTestimonialController {
    @AuraEnabled(cacheable=true)
    public static Boolean updateTestimonialHelper(String acctName, String Testimonial){
        //programmatically update a standard object
        List<Account> acctToUpdate = new List<Account>();
        try {
            
            acctToUpdate = 
                [SELECT Name,Testimonial__c FROM Account 
                 WHERE Name=:acctName];
            // Update the testimonial
            acctToUpdate[0].Testimonial__c = Testimonial;
            // Make the update call.
            update acctToUpdate;
            return true;
        } catch(DmlException e) {
            System.debug('An unexpected error has occurred: ' + e.getMessage());
            return false;
        }
    }
}
