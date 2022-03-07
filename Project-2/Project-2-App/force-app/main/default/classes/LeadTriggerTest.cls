@isTest(SeeAllData=true)
public with sharing class LeadTriggerTest {
    public static testMethod void ContactCreatedTest() {
        List<Lead> leadList = new List<Lead>();

        Lead nl = new Lead();
        nl.LastName = 'TestLastName';
        nl.Status = 'Open - Not Contacted';
        nl.Company = 'TestCompany';
        nl.Phone = '860 456 3456';
        nl.Title = 'Director';
        nl.Email = 'testemail@email.com';
        leadList.add(nl);

        insert nl;


        Test.StartTest();

        LeadTriggerHelper.createNewContact(leadList);
        nl.Status = 'Closed - Converted';
        update nl;
        List<Contact> c = [SELECT LastName,Phone,Email,Title FROM Contact WHERE LastName=:nl.LastName];
        List<Account> a = [SELECT Name,Phone FROM Account WHERE Name=:nl.Company];
        System.assert((a[0].Name == nl.Company) && (a[0].Phone == nl.Phone));
        System.assert((c[0].LastName == nl.LastName) && (c[0].Phone == nl.Phone) && (c[0].Email == nl.Email) && (c[0].Title == nl.Title));

        Test.StopTest();


        



    }
}
