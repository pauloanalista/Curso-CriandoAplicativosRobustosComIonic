import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina1Page } from '../pagina1/pagina1';
import { Pagina2Page } from '../pagina2/pagina2';



@Component({
  selector: 'page-pagina-principal',
  templateUrl: 'pagina-principal.html',
})
export class PaginaPrincipalPage {

  constructor(private navCtrl : NavController) {
  }

  ionViewDidLoad() {
    
  }


  abrirPagina1ComoRoot(){
    this.navCtrl.setRoot(Pagina1Page)
  }

  abrirPagina2ComoRoot(){
    this.navCtrl.setRoot(Pagina2Page)
  }

  abrirPagina1ComPush(){
    this.navCtrl.push(Pagina1Page)
  }

  abrirPagina2ComPush(){
    this.navCtrl.push(Pagina2Page)
  }
}
