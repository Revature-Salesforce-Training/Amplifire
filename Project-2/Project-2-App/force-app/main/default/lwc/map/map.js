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