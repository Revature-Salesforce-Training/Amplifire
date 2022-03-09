@isTest
public class TwitterCalloutMock implements HttpCalloutMock {
    
    public HttpResponse respond(HttpRequest request) {
        HttpResponse response = new HttpResponse();

        response.setHeader('Content-Type', 'application/json');
        response.setStatusCode(200);
        response.setBody(
            '{"data":{"entities":{"description":{"hashtags":[{"start":0,"end":8,"tag":"bitcoin"}]}},"pinned_tweet_id":"1247616214769086465","location":"\uD83C\uDF0A","username":"jack","name":"jack⚡️","id":"12","description":"#bitcoin","profile_image_url":"https://pbs.twimg.com/profile_images/1115644092329758721/AFjOr-K8_normal.jpg"}}')
        ;
        return response;
    }
}
