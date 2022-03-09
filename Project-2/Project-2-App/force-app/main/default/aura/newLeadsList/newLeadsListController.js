({
    // Init
    doInit: function(component, event, helper) {
        helper.setColumns(component);
        helper.getData(component);
    },

    // Sort the datatable
    onSort: function(component, event, helper) {
        helper.handleSort(component, event);
    },

    // Get data from selected records
    getSelected: function(component, event, helper) {
        helper.getSelected(component, event);
    }
})
