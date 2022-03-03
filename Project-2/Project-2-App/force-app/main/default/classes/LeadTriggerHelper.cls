public with sharing class LeadTriggerHelper {
    public static void createNewContact(List<Lead> leadlist) {
        List<Contact> contacts = new List<Contact>();
        List<Account> accounts = new List<Account>();
        List<String> listEmail = new List<String>();
    
    for (Lead email : leadlist) {
        if(email.Email != null){
            listEmail.add(email.Email);
        }
    }
    
    List<Contact> c_email = [SELECT Id, Email FROM Contact WHERE Email = :listEmail];
    String cemail;
    for(Contact ce : c_email){
        cemail = ce.Email;
    }
    
    for(Lead l : leadlist) {
        if ((l.Email != cemail) && (l.Status == 'Closed - Converted')) {


            Account a = new Account();
            Contact c = new Contact();
            c.FirstName = l.FirstName;
            c.LastName = l.LastName;
            c.Email = l.Email;
            c.Phone = l.Phone;
            c.Title = l.Title;

            a.Name = l.Company;
            a.Phone = l.Phone;

            c.AccountId = a.Id;

            accounts.add(a);
            contacts.add(c);
            
        } 
    }
    

    if(accounts.size()>0){
        try{
            INSERT accounts;
        }
          catch(DmlException e){
              System.debug(e);
          }
    }

    if(contacts.size()>0){
        try{
            INSERT contacts;
        }
          catch(DmlException e){
              System.debug(e);
          }
    }
            

    }
}
