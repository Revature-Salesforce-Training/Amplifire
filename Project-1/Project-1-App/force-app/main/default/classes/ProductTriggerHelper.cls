public with sharing class ProductTriggerHelper {

    public static void handleTrigger(
        List<Product2> newRecords, List<Product2> oldRecords, System.TriggerOperation triggerEvent
    ) {
        switch on triggerEvent {
            when BEFORE_INSERT, BEFORE_UPDATE {
                // Validation


                // Set SKU
                setSkuOnSave(newRecords[0]);
            }
            
            //do nothing for AFTER_UNDELETE, BEFORE_DELETE, AFTER_INSERT, AFTER_UPDATE or AFTER_DELETE
        }
    }

    // If the SKU field is empty, create it before insert
    private static void setSkuOnSave(Product2 product) {
        // Set random string as SKU
        if (String.isBlank(product.StockKeepingUnit)) {
            product.StockKeepingUnit = generateRandomSku()

            // insert product;
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
