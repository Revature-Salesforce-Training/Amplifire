public with sharing class AccountVerifierHelper {
    public static boolean verifyAccount(Account newAcc){
        //query db for account by name
        String acctName=NewAcc.Name;
        List<Account> result=[Select Name FROM Account WHERE Name= :acctName];
        Account currentAcct=result[0];
        //check that info from db is not null
        if(currentAcct != null){
            return true;
        }else {
            return false;
        }
    }
    public static boolean isBlank(Account a){
        //query db for account by name
        String acname=a.Name;
        List<Account> result=[Select Name FROM Account WHERE Name= :acname];
        Account currAcc=result[0];
        //check that the testimonial is blank
        if(String.isBlank(currAcc.Testimonial__c)){
            return true;
        }else {
            return false;
        }
    }
}
