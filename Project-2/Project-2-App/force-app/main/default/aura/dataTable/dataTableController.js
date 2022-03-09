/*
*	Author:- Drew Williams
*	Description:- Data table that displays the current Accounts
*	Date: 3/8/22
*/
    ({
        init: function (cmp, event, helper) {
             cmp.set('v.mycolumns', [
                {label: 'Account name', fieldName: 'Name', type: 'text'}, 
                {label: 'Phone', fieldName: 'Phone', type: 'phone'},
                {label: 'Website', fieldName: 'Website', type: 'url', typeAttributes: { target: '_self'}},
             ]);
             helper.getData(cmp);
         }
     })

