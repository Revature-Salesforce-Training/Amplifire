/*
*	Author:- Drew Williams
*	Description:- Data table that displays the current Accounts
*	Date: 3/8/22
*/

public with sharing class TableController {
    
    @AuraEnabled
    public static List<Account> getAccount() {
        List<Account> accounts =
         [SELECT Name, Phone, Website FROM Account];
         return accounts;
    }
}
