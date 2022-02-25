import { LightningElement } from 'lwc';
import book1 from '@salesforce/resourceUrl/book1';
import book2 from '@salesforce/resourceUrl/book2';
import book3 from '@salesforce/resourceUrl/book3';


export default class Carousel extends LightningElement {
    book1Img = book1;
    book2Img = book2;
    book3Img = book3;



    handleEvent1(event) {
        if (event.target.getAttribute('aria-hidden')) {
            event.target.setAttribute('aria-hidden', false);
        }  
            event.target.setAttribute('aria-hidden', true);
    


    } 
}
