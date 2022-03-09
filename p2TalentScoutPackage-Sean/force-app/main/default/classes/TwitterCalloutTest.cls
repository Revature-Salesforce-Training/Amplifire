@isTest
public class TwitterCalloutTest {
    @isTest
    public static void testInterfaceMock() {
        Test.setMock(HttpCalloutMock.class, new TwitterCalloutMock());
        String username = 'jack';
        String testInfo = HttpService.getTwitterProfileByUsername(username);

        Map<String,Object> respMap = (Map<String,Object>) JSON.deserializeUntyped(testInfo);
        Map<String,Object> data = (Map<String,Object>) respMap.get('data');
        String name = (String) data.get('name');

        System.assertEquals('jack⚡️', name, 'Name does not match expected');
    }
}
