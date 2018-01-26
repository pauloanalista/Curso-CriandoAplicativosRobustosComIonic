import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {

  barcode : string = "";
  constructor(private barcodeScanner: BarcodeScanner, private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {

  }

  scanearProduto() {
    this.barcodeScanner.scan().then((barcodeData) => {
      let response : string  = JSON.stringify(barcodeData);
      
      this.barcode = response;
      
      this.toastCtrl.create({
        message : response,
        duration: 2000,
        position : 'top'
      }).present();
      
    }, (err) => {
      let erro = JSON.stringify(err);
      this.toastCtrl.create({
        message : erro,
        duration: 2000,
        position : 'top'
      }).present();
    });
  }
}
