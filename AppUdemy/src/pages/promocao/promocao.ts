import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';


@Component({
  selector: 'page-promocao',
  templateUrl: 'promocao.html',
})
export class PromocaoPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    
  }

  showCurso(url : string){
    window.open(url);
  }
}
