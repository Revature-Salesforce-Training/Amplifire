public with sharing class NewLeadsListController {

    // Get a list of the upcoming shows or record releases for managed artists
    @AuraEnabled
    public static List<Lead> getLeads(/* String type */) {
        String query = 
            'SELECT LastName,FirstName,Email,LeadSource,IsConverted ' +
            'FROM Lead ' +
            'LIMIT 10'
        ;

        String escapedQuery = String.escapeSingleQuotes(query);
        
        return Database.query(escapedQuery);
    }
}
