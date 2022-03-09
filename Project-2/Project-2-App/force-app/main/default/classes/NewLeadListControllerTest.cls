@isTest
public class NewLeadListControllerTest {

    @isTest
    public static void getLeadsTest() {
        buildSearchResults();

        List<Lead> returnedLeads = NewLeadsListController.getLeads();

        System.assertEquals(false, returnedLeads.isEmpty());
    }

    private static void buildSearchResults() {
        Lead newLead = new Lead();
        newLead.LastName = 'TEST';
        newLead.Company = 'TEST'; 
        newLead.Twitter_Handle__c = '@TEST';

        insert newLead;
    }
}
