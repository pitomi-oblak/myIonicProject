import { Component } from '@angular/core';
import {NavController, PopoverController, ViewController} from 'ionic-angular';


@Component({
    selector:`page-popover`,
    template: `
      <ion-list>
        <ion-list-header>KORISNICKI NALOG</ion-list-header>
        <button ion-item (click)="close()">Registacija/Prijava</button>
        <button ion-item (click)="close()">Podesavanja</button>
      </ion-list>
    `
})
export class PopoverPage {
    constructor(public viewCtrl: ViewController, public popoverCtrl:PopoverController,public navCtrl: NavController) {}
    close() {
        this.viewCtrl.dismiss();
    }
}