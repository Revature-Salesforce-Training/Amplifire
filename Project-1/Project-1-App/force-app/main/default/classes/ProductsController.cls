public with sharing class ProductsController {

    // Return List of books that the user (bookseller) has created
    public static List<Product2> getProducts() { 
        return [
            SELECT Name,Author__c,Genre__c,Page_Count__c 
            FROM Product2 
            WHERE CreatedById = '0058c00000ABNVeAAP'
            WITH SECURITY_ENFORCED
        ];
    }
    
    // Create new book listing
    public static void addBook(Product2 product) {
        insert product;
    }
}
