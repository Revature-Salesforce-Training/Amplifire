trigger NoDuplicateUserEmail on User (before insert) {
    if (Trigger.isInsert) {
        if (Trigger.isBefore) {
            // call trigger helper class
            Integer numOfDups=0;
            for(User u : Trigger.New ){      
                //helper method returns number of Duplicate Emails
                numOfDups = noDuplicateEmailHelper.noDupHelperMethod(u);
                //if numOfDups == 0 do the insert
                if(numOfDups == 0){
                    insert u;
                }
                //otherwise numOfDups >0 error
                else{
                    u.Email.adderror('This contact is a duplicate');
                }
            }
        }        
    }
    else if (Trigger.isUpdate) {
        if(Trigger.isBefore){
           // call trigger helper class
           Integer numOfDups=0;
           for(User u : Trigger.New ){      
               //helper method returns number of Duplicate Emails
               numOfDups = noDuplicateEmailHelper.noDupHelperMethod(u);
               //if numOfDups == 0 do the insert
               if(numOfDups == 0){
                   insert u;
               }
               //otherwise numOfDups >0 error
               else{
                   u.Email.adderror('This contact is a duplicate');
               }
           } 
        }
    }
}