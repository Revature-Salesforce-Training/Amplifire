import { LightningElement } from 'lwc';
import getTwitterProfileByUsername from "@salesforce/apex/HttpService.getTwitterProfileByUsername";

export default class TwitterView extends LightningElement {

    username;

    data;                   // Data from apex method
    error;                  // Error, if there is one

    timeout;

    // Properties for view
    profileImageUrl = '';   
    name = '';
    description = '';
    
    handleClick() {
        this.load(this.username);
    }

    handleChange(event) {
        this.username = event.target.value;
    }

    // Load the user profile from TwitterApi with given username
    load(username) {
        getTwitterProfileByUsername({ username: username })
            .then(data => {
                this.data = JSON.parse(data).data;
                console.log(data);
                this.profileImageUrl = this.data.profile_image_url;
                this.name = this.data.name;
                this.description = this.data.description;
            })
            .catch(error => { 
                this.error = JSON.parse(error);
                console.error('Error fetching twitter: ' + this.error);
            })
    }
}