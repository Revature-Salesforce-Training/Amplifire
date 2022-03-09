trigger AccountVerifier on Account (before update) {
    //a trigger that checks that an account exists and
    //doesnt have a testimonial field filled out
    //it prevents insertion of a testimonial to nonexistent account
    if(Trigger.isUpdate && Trigger.isBefore){
        Boolean acctExists=AccountVerifierHelper.verifyAccount(Trigger.new[0]);
        Boolean testimonialisBlank=AccountVerifierHelper.isBlank(Trigger.new[0]);
        if(acctExists == false && testimonialisBlank == false){
            Trigger.new[0].addError('Sorry, you need to have an account to leave a testimonial.');
        }
    }

}