import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  usuario : any; 
  constructor(public nav : NavController, public navParams: NavParams) {
    
    this.usuario = this.navParams.get("usuario");

    console.log(this.usuario);
  }

  ionViewDidLoad() {
    
  }

  fecharPagina(){
    this.nav.pop();

    //this.nav.popAll();
    //this.nav.popToRoot();
    
  }

}
