import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  itens : string[] = ['Laranja', 'Maça', 'Abacate', 'Manga','Pera', 'Uva', 'Limão'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  selecionarItem(item){
    console.log(item);
  }

}
