import { Component } from '@angular/core';
import { PopoverController} from 'ionic-angular';
import { IconesPage } from '../icones/icones';



@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public popoverCtrl : PopoverController) {
  }

  ionViewDidLoad() {
    
  }

  abrirPopover(){
    let popover = this.popoverCtrl.create(IconesPage);

    popover.present();
  }
}
