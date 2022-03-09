// <!-- 

// Author: Gabriel Anton 
// Date: 3/8/22 
// Description: Apex Controller Test

// -->

@isTest(SeeAllData=true)
public with sharing class LeadControllerTest {
    
    public static testMethod void WorkingLeadsTest(){
        
        
        // System.runAs(contextuser){
            Lead wl = new Lead();
            wl.LastName = 'WorkingTestName';
            wl.Status = 'Working - Contacted';
            wl.Company = 'WorkingTestCompany';
            insert wl;

            // LeadController testWorking = new LeadController();

            Test.startTest();
            List<Lead> listLead = LeadController.retrieveAllWorkingLeads();
            System.assert(listLead != null);
            
        // }
        Test.stopTest();
        
    } 
    
    
    public static testMethod void OpenLeadsTest() {
        
        // System.runAs(contextuser){
            Lead ol = new Lead();
            ol.LastName = 'OpenTestName';
            ol.Status = 'Open - Not Contacted';
            ol.Company = 'OpenTestCompany';
            insert ol;

            // LeadController testOpen = new LeadController();

            Test.startTest();
            List<Lead> listLead = LeadController.retrieveAllOpenLeads();
            System.assert(listLead != null);
            
        // }
        Test.stopTest();

    }

    
    public static testMethod void LostLeadsTest() {
        
        // System.runAs(contextuser){
            Lead ll = new Lead();
            ll.LastName = 'LostTestName';
            ll.Status = 'Closed - Not Converted';
            ll.Company = 'LostTestCompany';
            insert ll;


            // LeadController testLost = new LeadController();

            Test.startTest();
            List<Lead> listLead = LeadController.retrieveAllUncovertedLeads();
            System.assert(listLead != null);
            
        // }
        Test.stopTest();

    }
}
