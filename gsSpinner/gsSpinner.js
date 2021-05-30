/**
 * @author Gurjit Singh
 * @date 29/May/2021
 * @group lightning-spinner
 * @description Renders slds spinner with the custom wait message.
 */

 import { LightningElement, track, api } from 'lwc';

 var waitMessageLocal;
 var DELAY = 1000;
 var totalDotsToDisplay = 4; // will show 1 lesser dot than the value assiged here.
 
 export default class GsSpinner extends LightningElement {
 
     @api waitMessage = 'Please wait';
     interval;
 
     connectedCallback() {
         waitMessageLocal = this.waitMessage;
         let counter = 1;
         this.interval = setInterval(() => {
             if (counter % totalDotsToDisplay == 0) {
                 this.waitMessage = waitMessageLocal;
             } else {
                 this.waitMessage += '.';
             }
             counter++;
         }, DELAY)
     }
 
     disconnectedCallback() {
         clearInterval(this.interval);
     }
 }