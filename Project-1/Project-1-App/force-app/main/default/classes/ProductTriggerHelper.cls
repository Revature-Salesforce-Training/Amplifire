public with sharing class ProductTriggerHelper {

    public static void handleTrigger(
        List<Product2> newRecords, List<Product2> oldRecords, System.TriggerOperation triggerEvent
    ) {
        switch on triggerEvent {
            when BEFORE_INSERT, BEFORE_UPDATE {
                // Validation
                validateFields(newRecords[0], oldRecords);

                // Set SKU
                setSkuOnSave(newRecords[0]);
            }
            
            //do nothing for AFTER_UNDELETE, BEFORE_DELETE, AFTER_INSERT, AFTER_UPDATE or AFTER_DELETE
        }
    }

    private static void validateFields(Product2 product, List<Product2> oldRecords) {
        // Disallow duplication of Title/Name
        for (Product2 p : oldRecords) {
            if (p.Name == product.Name) {
                product.Name.addError('Book already exists!');
            }
        }
    }

    // If the SKU field is empty, create it before insert
    private static void setSkuOnSave(Product2 product) {
        // Set random string as SKU
        if (String.isBlank(product.StockKeepingUnit)) {
            product.StockKeepingUnit = generateRandomSku();

            upsert product;
        }
    }

    // Generate a 15-character string of random numbers
    private static String generateRandomSku() {
        String sku = '';

        for (Integer i = 0; i < 15; i++) {
            Integer rand = Crypto.getRandomInteger();
            sku = sku + rand.format();
        }

        return sku;
    }
}
