// Nav Component for Partner Portal ExpCloud site
import { LightningElement } from "lwc";

export default class Header extends LightningElement {

    // Custom event to bubble up to app component when nav-button is clicked
    // We pass the button that was clicked up so app comp. can render child selected
    handleNavigation(e) {
        this.dispatchEvent(new CustomEvent("navigate", { detail: e.target.innerText }));
    }
}