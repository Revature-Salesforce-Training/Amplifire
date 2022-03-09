@isTest
public class NewLeadTriggerHelperTest {
    @isTest
    public static void checkForTwitterUsernameTest() {
        try {
            Lead testLead = new Lead();
            insert testLead;
        } catch (Exception e) {
            String message = e.getMessage();
            System.assertEquals('Twitter handle required!', message, 'Expected a username');
        }
    }
}
