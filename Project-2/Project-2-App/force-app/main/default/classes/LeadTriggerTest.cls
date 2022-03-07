@isTest(SeeAllData=true)
public with sharing class LeadTriggerTest {
    public static testMethod void ContactCreatedTest() {
        Lead nl = new Lead();
        nl.LastName = 'TestLastName';
        nl.Status = 'Open - Not Contacted';
        nl.Company = 'TestCompany';
        insert nl;

        nl.Status = 'Open - Not Contacted';
        update nl;


        



    }
}
