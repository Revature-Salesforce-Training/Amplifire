public with sharing class TableController {
    
    @AuraEnabled
    public static List<Account> getAccount() {
        return [SELECT Name, Phone, Website FROM Account];
    }
}
