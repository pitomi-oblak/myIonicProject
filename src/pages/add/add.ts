import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {ActionSheetController} from "ionic-angular";

import {PuppiesPage} from "../puppies/puppies";
import {KittensPage} from "../kittens/kittens";
import {OthersPage} from "../others/others";
import {LostNfoundPage} from "../lostNfound/lostNfound";


@Component({
    selector: 'page-add',
    templateUrl: 'add.html'
})
export class AddPage {
    galleryType = 'regular';

    constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, private camera: Camera) {
    }
    myPhoto: any;

    openMenu() {

        let actionSheet = this.actionSheetCtrl.create({
            title: 'Dodaj sliku',
            // cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Otvori Kameru',
                    handler: () => {
                        const options: CameraOptions = {
                            quality: 70,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        }

                        this.camera.getPicture(options).then((imageData) => {
                            this.myPhoto = 'data:image/jpeg;base64,' + imageData;
                        }, (err) => {

                        });
                        console.log('Camera is opened.');
                    }
                },
                {
                    text: 'Otvori Galeriju',
                    handler: () => {
                        const options: CameraOptions = {
                            quality: 70,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            encodingType: this.camera.EncodingType.JPEG,
                            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                            saveToPhotoAlbum: false,
                            allowEdit: true,
                            targetWidth: 300,
                            targetHeight: 300
                        }

                        this.camera.getPicture(options).then((imageData) => {
                            this.myPhoto = 'data:image/jpeg;base64,' + imageData;
                        }, (err) => {

                        });
                        console.log('Gallery is opened.');
                    }
                },
                {
                    text: 'Odustani',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

}
