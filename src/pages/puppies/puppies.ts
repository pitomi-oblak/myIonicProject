import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
    selector: 'page-puppies',
    templateUrl: 'puppies.html'
})
export class PuppiesPage {
    galleryType = 'regular';
    constructor(public navCtrl: NavController) {
    }
}