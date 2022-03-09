/*
*	Author:- Drew Williams
*	Description:- Map LWC component that shows our store HQ at the Hollywood Sign
*	Date: 3/8/22
*/

import { LightningElement } from 'lwc';

export default class Map extends LightningElement {
    mapMarkers = [
        {
            location: {
                Street: '6101 Mullholland Hwy',
                City: 'Los Angeles',
                State: 'CA',
                PostalCode: '90068',
                Country: 'USA',

            },
            title: 'Hollywood',
            description:'The American Dream',
            icon: 'standard:account',
        },
    ];
}