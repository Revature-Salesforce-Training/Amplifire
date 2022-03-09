public class HttpService {
    
    @AuraEnabled(cacheable=true)
    public static String getTwitterProfileByUsername(String username){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        // Build the url to set the endpoint
        // Using Named Credentials to handle Twitter API Key
        String url =    
            'callout:Twitter/2/users/by/username/' + username 
            + '?user.fields=description,entities,id,location,name,pinned_tweet_id,profile_image_url'
        ;
        

        // Setup the request
        request.setEndpoint(url);
        request.setMethod('GET');
        request.setHeader('Authorization', 'Bearer {!$Credential.Password}');
        
        // Send the request
        HttpResponse response = http.send(request);

        // Handle the response
        return response.getBody();
    }
}
