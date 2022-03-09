public with sharing class AccountListController {
    @AuraEnabled
    public static List<Account> getAccounts() {
        return [SELECT Name,Testimonial__c FROM Account];
    }
}
