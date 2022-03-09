public with sharing class NewLeadTriggerHelper {

    public static void checkForTwitterUsername(List<Lead> leads) {
        if (String.isBlank(leads[0].Twitter_Handle__c)) {
            leads[0].addError('Twitter handle required!');
        }
    }
}
