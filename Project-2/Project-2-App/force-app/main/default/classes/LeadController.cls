// <!-- 

// Author: Gabriel Anton 
// Date: 3/8/22 
// Description: Apex Controller

// -->

public with sharing class LeadController {

    
    @AuraEnabled
    public static List<Lead> retrieveAllWorkingLeads() {
        System.debug('Aura Controller');
        return [SELECT Name,Status,Company,ID,Email,Rating 
                FROM Lead
                WHERE Status = 'Working - Contacted'];
    }

    
    @AuraEnabled
    public static List<Lead> retrieveAllOpenLeads() {
        System.debug('Aura Controller');
        return [SELECT Name,Status,Company,ID,Email,Rating 
                FROM Lead
                WHERE Status = 'Open - Not Contacted'];

    }

    
    @AuraEnabled
    public static List<Lead> retrieveAllUncovertedLeads() {
        System.debug('Aura Controller');
        return [SELECT Name,Status,Company,ID,Email,Rating 
                FROM Lead
                WHERE Status = 'Closed - Not Converted'];

    }
}
