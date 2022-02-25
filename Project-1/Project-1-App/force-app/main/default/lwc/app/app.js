/* eslint-disable eqeqeq */
import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    isShowingHomeView = true;
    isShowingListingsView = false;
    isShowingOrdersView = false;
    isShowingCarouselView = false;
    isShowingFaqView = false;

    // Navigation handler for header page switching
    handleNavigation(event) {

        let component = event.detail.toLowerCase();
    
        console.log(component);

        if (component == 'home') {
            this.isShowingHomeView = true;
            this.isShowingListingsView = false;
            this.isShowingOrdersView = false;
            this.isShowingCarouselView = false;
            this.isShowingFaqView = false;
        } else if (component == 'listings') {
            this.isShowingHomeView = false;
            this.isShowingListingsView = true;
            this.isShowingOrdersView = false;
            this.isShowingCarouselView = false;
            this.isShowingFaqView = false;
        } else if (component == 'orders') {
            this.isShowingHomeView = false;
            this.isShowingListingsView = false;
            this.isShowingOrdersView = true;
            this.isShowingCarouselView = false;
            this.isShowingFaqView = false;
        } else if (component == 'carousel') {
            this.isShowingHomeView = false;
            this.isShowingListingsView = false;
            this.isShowingOrdersView = false;
            this.isShowingCarouselView = true;
            this.isShowingFaqView = false;
        } else if (component == 'f.a.q.') {
            this.isShowingHomeView = false;
            this.isShowingListingsView = false;
            this.isShowingOrdersView = false;
            this.isShowingCarouselView = false;
            this.isShowingFaqView = true;
        }
    }
}