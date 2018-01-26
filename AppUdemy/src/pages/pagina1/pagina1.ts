import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pagina2Page } from '../pagina2/pagina2';



@Component({
  selector: 'page-pagina1',
  templateUrl: 'pagina1.html',
})
export class Pagina1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina1Page');
  }

  abrirPagina2ComoRoot(){
    this.navCtrl.setRoot(Pagina2Page);
  }

  abrirPagina2ComPush(){
    this.navCtrl.push(Pagina2Page);
  }

  abrirPagina2ComParametros(){
    let usuarioParameter = {nome: 'Paulo Rogério', idade: 37};
    this.navCtrl.push(Pagina2Page, { usuario : usuarioParameter});
  }
}
