/*
*	Author:- Drew Williams
*	Description:- Account trigger that checks if name on Account is duplicated. If so, displays error message.
*	Date: 3/8/22
*/

trigger DupeAccountTrigger on Account (before insert) {
    DupeAccountTriggerHelper.DupeAccount(Trigger.new);
}