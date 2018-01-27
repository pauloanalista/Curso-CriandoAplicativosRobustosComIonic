import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PromocaoPage } from '../promocao/promocao';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  redirecionarParaCurso() {
    window.open('https://www.udemy.com/criando-aplicativos-robustos-com-ionic/?couponCode=IONIC25');
  }

  showPromocao() {
    this.navCtrl.push(PromocaoPage);
  }
}
