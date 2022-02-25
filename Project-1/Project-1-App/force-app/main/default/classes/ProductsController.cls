/**
    Created by Sean Whitley
    Team AuraForce
    Revature, 20220118 Cohort
 */

public with sharing class ProductsController {
    private static String userId = UserInfo.getUserId();

    // Return List of books that the user (bookseller) has created
    @AuraEnabled(cacheable=true)
    public static List<Product2> getProducts() { 
        return [
            SELECT Id,Name,Author__c,Genre__c,Page_Count__c,Description__c,Current_Stock__c
            FROM Product2 
            WHERE CreatedById = :userId
            WITH SECURITY_ENFORCED
        ];
    }
    
    // Dynamically search for book record by Name field
    @AuraEnabled(cacheable=true)
    public static List<Product2> queryByName(String name) {
        // Build the query with queryBuilder()
        String query = queryBuilder(
            'Name,Author__c,Genre__c,Page_Count__c',
            'Name=:name'
        );

        // Return query result of List<Product2>
        return Database.query(query);
    }

    // Helper method to build query strings for Database.query()
    // fields fields desired in returned list
    // whereClause: filter parameters (eg, Name='name')
    private static String queryBuilder(String fields, String whereClause) {
        // Sanitize strings before building query string
        String fieldsSanitized = String.escapeSingleQuotes(fields);
        String whereClauseSanitized = String.escapeSingleQuotes(whereClause);

        return 'SELECT :fieldsSanitized FROM Product2 WHERE :whereClauseSanitized,CreatedById=0058c00000ABNVeAAP WITH SECURITY_ENFORCED';
    }
}

