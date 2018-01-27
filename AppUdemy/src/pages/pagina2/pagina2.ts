import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavParams, NavController, AlertController } from 'ionic-angular';



@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  usuario: any;
  constructor(public nav: NavController, public navParams: NavParams, public alertCtrl : AlertController) {

    this.usuario = this.navParams.get("usuario");

    console.log(this.usuario);
  }

  ionViewDidLoad() {

  }

  fecharPagina() {
    if (this.nav.canGoBack()){
      this.nav.pop();
    }
    else{
      let alert = this.alertCtrl.create(
        {
          title: 'Esta é uma página root',
          message: 'Deseja definir a página Home como root novamente?',
          buttons: [
            {
              text: "Não, quero continuar aqui",
              role: 'cancel',
              handler: () => {
                
              }
            },
            {
              text: 'Sim, quero voltar para Home',
              handler: () => {
                this.nav.setRoot(HomePage);
              }
            }
          ]
        }
      );
  
      alert.present();
    }

    //this.nav.popAll();
    //this.nav.popToRoot();

  }

}
