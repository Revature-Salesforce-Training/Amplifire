public with sharing class RetrieveProductInfoHelper {
    @AuraEnabled(cacheable=true)
    public static List<Product2> helperMethod(){
        List<Product2> pl=[SELECT Name,Author__c,Genre__c,Page_Count__c
                           FROM Product2];
        return pl;
    }
}
