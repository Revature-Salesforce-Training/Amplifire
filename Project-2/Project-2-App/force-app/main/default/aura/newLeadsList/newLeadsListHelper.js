({
    // Constants
    COLUMNS: [
        {
            label: 'Last Name',
            fieldName: 'LastName',
            type: 'string'
        },
        {
            label: 'First Name',
            fieldName: 'FirstName',
            type: 'string'
        },
        {
            label: 'Twitter Handle',
            fieldName: 'Twitter_Handle__c',
            type: 'string'
        },
        {
            label: 'Email',
            fieldName: 'Email',
            type: 'email'
        },
        {
            label: 'Is Converted',
            fieldName: 'IsConverted',
            type: 'boolean'
        },
    ],

    // doInit
    // Set column labels/types and get data from org
    setColumns: function(component) {
        component.set('v.columns', this.COLUMNS);
    },

    getData: function(component) {
        var getLeads = component.get('c.getLeads');

        getLeads.setCallback(this, function(data) {
            //TODO: error handling
            component.set("v.data", data.getReturnValue());
        });

        $A.enqueueAction(getLeads);
    },

    // Sort datatable
    // From the docs
    handleSort: function(cmp, event) {
        var sortedBy = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');

        var cloneData = this.DATA.slice(0);
        cloneData.sort((this.sortBy(sortedBy, sortDirection === 'asc' ? 1 : -1)));
        
        cmp.set('v.data', cloneData);
        cmp.set('v.sortDirection', sortDirection);
        cmp.set('v.sortedBy', sortedBy);
    },

    // Get data about selected component
    getSelected: function(component, event) {
        var selectedRows = event.getParam('selectedRows');

        // Display that fieldName of the selected rows
        //Todo: Add functionality
        // for (var value of selectedRows){
        //     alert("You selected: " + value.name);
        // }
    }
})
