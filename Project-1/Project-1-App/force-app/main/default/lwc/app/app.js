import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    constructor() {
        super();

        this.isShowingHomeView = true;
        this.isShowingListingView = false;
        this.isShowingChatView = false;
        this.isShowingFaqView = false;
    }

    // Navigation handler for header page switching
    handleNavigation(event) {
        // Event detail passed is the innerText of the .nav-link 
        this.viewSwitcherHelper(event.detail.toLowerCase());
    }

    // Helper to set all boolean values at once, deterministically
    viewSwitcherHelper(viewString) {
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
                this.isShowingChatView = false;
                break;
            case 'faq':
                this.isShowingFaqView = false;
                break;
            default:
                this.isShowingHome = true;
        }
    }
} 
