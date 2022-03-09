/*
*	Author:- Drew Williams
*	Description:- Data table that displays the current Accounts
*	Date: 3/8/22
*/

public with sharing class TableController {
    
    @AuraEnabled
    public static List<Account> getAccount() {
        return [SELECT Name, Phone, Website FROM Account];
    }
}
