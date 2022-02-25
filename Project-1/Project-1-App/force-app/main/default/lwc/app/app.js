/* eslint-disable eqeqeq */
import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    isShowingHomeView = true;
    isShowingListingsView = false;
    isShowingOrdersView = false;
    isShowingChatView = false;
    isShowingFaqView = false;

    // Navigation handler for header page switching
    handleNavigation(event) {

        let component = event.detail.toLowerCase();
    
        console.log(component);

        if (component == 'home') {
            this.isShowingHomeView = true;
            this.isShowingListingsView = false;
            this.isShowingOrdersView = false;
            this.isShowingChatView = false;
            this.isShowingFaqView = false;
        } else if (component == 'listings') {
            console.log('Inside Listings')
            this.isShowingHomeView = false;
            this.isShowingListingsView = true;
            this.isShowingOrdersView = false;
            this.isShowingChatView = false;
            this.isShowingFaqView = false;
        } else if (component == 'orders') {
            this.isShowingHomeView = false;
            this.isShowingListingsView = false;
            this.isShowingOrdersView = true;
            this.isShowingChatView = false;
            this.isShowingFaqView = false;
        } else if (component == 'chat') {
            this.isShowingHomeView = false;
            this.isShowingListingsView = false;
            this.isShowingOrdersView = false;
            this.isShowingChatView = true;
            this.isShowingFaqView = false;
        } else if (component == 'f.a.q.') {
            this.isShowingHomeView = false;
            this.isShowingListingsView = false;
            this.isShowingOrdersView = false;
            this.isShowingChatView = false;
            this.isShowingFaqView = true;
        }
        // switch (viewString) {
        //     case 'home':
        //         this.isShowingHomeView = true;
        //         this.isShowingListingView = false;
        //         this.isShowingOrderView = false;
        //         this.isShowingChatView = false;
        //         this.isShowingFaqView = false;
        //         break;
        //     case 'listing':
        //         this.isShowingHomeView = false;
        //         this.isShowingListingView = true;
        //         this.isShowingOrderView = false;
        //         this.isShowingChatView = false;
        //         this.isShowingFaqView = false;
        //         break;
        //     case 'orders':
        //         this.isShowingHomeView = false;
        //         this.isShowingListingView = false;
        //         this.isShowingOrderView = true;
        //         this.isShowingChatView = false;
        //         this.isShowingFaqView = false;
        //         break;
        //     case 'chat':
        //         this.isShowingHomeView = false;
        //         this.isShowingListingView = false;
        //         this.isShowingOrderView = false;
        //         this.isShowingChatView = true;
        //         this.isShowingFaqView = false;
        //         break;
        //     case 'f.a.q.':
        //         this.isShowingHomeView = false;
        //         this.isShowingListingView = false;
        //         this.isShowingOrderView = false;
        //         this.isShowingChatView = false;
        //         this.isShowingFaqView = true;
        //         break;
        //     default:
        //         console.log('Unrecognized navigation');
        // }
    }
}