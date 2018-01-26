import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';


@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    
  }

  showToast(position : string){
    this.toastCtrl.create({
      message : 'Dados salvo com sucesso!',
      duration: 2000,
      position : position
    }).present();
  }

  showLongToast(){
    this.toastCtrl.create({
      message : 'Seja bem vindo ao curso de Ionic, aqui você terá a oportunidade de aprender cada componente disponível pelo ionic framework',
      duration: 2000,
      position : 'top'
    }).present();
  }

  showToastWithCloseButton(){
    this.toastCtrl.create({
      message : 'Operação realizada com sucesso!',
      showCloseButton: true,
      closeButtonText : 'OK',
      position : 'top'
    }).present();
  }
}
