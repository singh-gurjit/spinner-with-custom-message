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

        //Adding and removing the dots after wait message string in a fixed interval of time.
        this.interval = setInterval(() => {
            //Resetting the wait message with the original wait message without the dots.
            if (counter % totalDotsToDisplay == 0) {
                this.waitMessage = waitMessageLocal;
            } else {
                this.waitMessage += '.'; // Keep adding the dots to the wait message.
            }
            counter++;
        }, DELAY)
    }

    disconnectedCallback() {
        clearInterval(this.interval);
    }
}