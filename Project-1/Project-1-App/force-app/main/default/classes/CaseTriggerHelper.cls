public with sharing class CaseTriggerHelper {
    public static void addDescription(List<Case> caseList) {
        for(Case c : caseList) {
            if(String.isBlank(c.Subject)) 
            c.Subject.addError('Please add a subject');
                if(String.isBlank(c.Description))
                c.Description.addError('Please add a description');
                    if(String.isBlank(c.Comments))
                    c.Comments.addError('Please add internal comments');
        }
    }   
}
