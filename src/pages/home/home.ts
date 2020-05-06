import { Component } from '@angular/core';
import {PopoverPage} from "../popover/popover";
import {PopoverController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    constructor(public popoverCtrl: PopoverController) {}

    presentPopover(myEvent) {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present({
            ev: myEvent
        });
    }
}
