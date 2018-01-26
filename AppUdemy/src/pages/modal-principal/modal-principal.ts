import { Component } from '@angular/core';
import { ModalController, ToastController } from 'ionic-angular';
import { FabPage } from '../fab/fab';
import { ModalConteudoPage } from '../modal-conteudo/modal-conteudo';



@Component({
  selector: 'page-modal-principal',
  templateUrl: 'modal-principal.html',
})
export class ModalPrincipalPage {

  constructor(public modalCtrl : ModalController, public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    
  }

  abrirModalBasico(){
    this.modalCtrl.create(FabPage).present();
  }

  abrirModalComParametros(){
    let param =  {nome: "Paulo", idade: 37};
    let modal = this.modalCtrl.create(ModalConteudoPage, {usuario : param});
  
    modal.onDidDismiss(data => {
      this.toastCtrl.create({
        message : data,
        duration: 3000,
        position : 'top'
      }).present();
    });

    modal.present();
  }
}
