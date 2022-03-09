public with sharing class DupeAccountTriggerHelper {

    public static boolean DupeAccount(List<Account> accList) {
        for(Account acc : accList) {
            for(Account acc2 : [Select Id, Name FROM Account]) {
                if(acc.name == acc2.name) {
                    acc.addError('There is already an account with this name.');
                    return false;
                }
            }
        }
        return true;
    }
}
