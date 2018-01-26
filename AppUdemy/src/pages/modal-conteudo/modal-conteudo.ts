import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-modal-conteudo',
  templateUrl: 'modal-conteudo.html',
})
export class ModalConteudoPage {

  usuario : any;
  constructor(public navParams: NavParams, public viewCtrl : ViewController) {
    this.usuario = this.navParams.get("usuario");
  }

  ionViewDidLoad() {
    
  }

  fecharModal(){
    this.viewCtrl.dismiss();
  }

  fecharModalComParametros(){
    let param = "Paulo Rogério";
    this.viewCtrl.dismiss(param);
  }
}
