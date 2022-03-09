({
    handleLeadButton: function(component, event) {
        var isList = component.get('v.isList');

        component.set('v.isList', !isList);
    }
})
