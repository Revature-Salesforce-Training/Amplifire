import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    isShowingHomeView = true;
    isShowingListingView = false;
    isShowingChatView = false;
    isShowingFaqView = false;

    // Navigation handler for header page switching
    handleNavigation(event) {
        // Event detail passed is the innerText of the .nav-link 
        this.viewSwitcherHelper(event.detail.toLowerCase());
    }

    // Helper to set all boolean values at once, deterministically
    viewSwitcherHelper(viewString) {
        console.log(viewString);
        // Set all to false, and set true individually in switch statement
        this.isShowingHomeView = false;
        this.isShowingListingView = false;
        this.isShowingChatView = false;
        this.isShowingFaqView = false;

        switch (viewString) {
            case 'home':
                this.isShowingHomeView = true;
                break;
            case 'listing':
                this.isShowingListingView = true;
                break;
            case 'chat':
                this.isShowingChatView = true;
                break;
            case 'f.a.q.':
                this.isShowingFaqView = true;
                break;
            default:
                this.isShowingHome = true;
                break;
        }
    }
}