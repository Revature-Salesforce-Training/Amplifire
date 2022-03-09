@isTest(SeeAllData=true)
public with sharing class DupeAccountTriggerTest {
    public static testMethod void TriggerTest() {
        Account a = new Account();
        Account b = new Account();
        
        List<Account> mockAcc = new List<Account>();
        a.Name = 'Spalding';
        insert a;

        Test.startTest();
        DupeAccountTriggerHelper.DupeAccount(mockAcc);

        List<Account> mockAcc2 = new List<Account>();
        b.Name = 'Spalding';
        insert b;
        mockAcc2.add(b);

        System.assert(DupeAccountTriggerHelper.DupeAccount(mockAcc2) == false);

        Test.stopTest();
    }
}
