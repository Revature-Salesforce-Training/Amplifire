public with sharing class noDuplicateEmailHelper {
    public static Integer noDupHelperMethod(User u){
        //search the db for contacts with the email of the new contact 
        String newEmail = u.Email;
        List<sObject> result = [SELECT Id,Name,Email FROM User WHERE Email= :newEmail];
        return result.size();
    }
}
