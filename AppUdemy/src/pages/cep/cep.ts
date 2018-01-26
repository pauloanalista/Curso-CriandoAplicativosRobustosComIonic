import { CepProvider } from './../../providers/cep/cep';
import { Component } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-cep',
  templateUrl: 'cep.html',
})
export class CepPage {

  public form: FormGroup;
  response: any;
  constructor(private cepProvider: CepProvider, private fb: FormBuilder, private toastCtrl : ToastController, public loadingCtrl: LoadingController) {
    this.form = this.fb.group({
      cep: ['', Validators.compose([
        Validators.required
      ])],
    });

  }

  ionViewDidLoad() {

  }

  consultarEnderecoPeloCep() {
    let aguarde = this.loadingCtrl.create({
      content: "Processando"
    });

    aguarde.present();
    
    let valueCep = this.form.controls['cep'].value;
    this.cepProvider.listarEndereco(valueCep).then((data) => {
      this.response = data.json();

      console.log(this.response);

      aguarde.dismiss();

    }).catch((response) => {
      aguarde.dismiss();
      this.toastCtrl.create({
        message : 'Cep não encontrado!',
        duration: 2000,
        position : 'top'
      }).present();
    });
  }
}
