public with sharing class myAccountListController {
    @AuraEnabled
    public static List<Account> getAccounts() {
        return [SELECT Name,Testimonial__c FROM Account];
    }
}
