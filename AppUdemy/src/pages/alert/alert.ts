import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

  }

  basicAlert() {
    let alert = this.alertCtrl.create(
      {
        title: 'Atenção',
        subTitle: 'Curso de Ionic em promoção',
        buttons: ['OK']
      }
    );

    alert.present();

  }

  confirmAlert() {
    let alert = this.alertCtrl.create(
      {
        title: 'Confirmar compra',
        message: 'Tem certeza que deseja comprar este livro?',
        buttons: [
          {
            text: "Cancelar",
            role: 'cancel',
            handler: () => {
              console.log('Compra cancelada');
            }
          },
          {
            text: 'Comprar',
            handler: () => {
              console.log('Compra realizada com sucesso!')
            }
          }
        ]
      }
    );

    alert.present();
  }

  inputAlert() {
    this.alertCtrl.create(
      {
        title: "Acesso restrito",
        inputs: [
          {
            name: 'login',
            placeholder: 'Login'
          },
          {
            name: 'senha',
            placeholder: 'Senha',
            type: 'password'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: data => {
              console.log('Autenticação cancelada!');
            }
          },
          {
            text: 'Entrar',
            handler: data => {
              if (data.login == 'paulo' && data.senha == '123') {
                console.log('Usuario autenticado!')
              }
              else {
                console.log('Seus dados não conferem!')
              }
            }
          }
        ]
      }
    ).present();
  }

  radioAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Escolha uma cor');
    alert.addInput(
      {
        type: 'radio',
        label: 'Azul',
        value: 'blue',
        checked: true
      }
    );
    alert.addInput(
      {
        type: 'radio',
        label: 'Vermelho',
        value: 'red',
        checked: false
      }
    );

    alert.addInput(
      {
        type: 'radio',
        label: 'Verde',
        value: 'green',
        checked: false
      }
    );

    alert.addButton("Cancelar");

    alert.addButton({
      text: 'OK',
      handler: (data: any) => {
        console.log('Cor selecionada', data);

      }
    });

    alert.present();
  }

  checkboxAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Quais frutas você gosta?');

    alert.addInput({
      type: 'checkbox',
      label: 'Laranja',
      value: 'orange',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Banana',
      value: 'banana',
      checked: false
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text : "OK",
      handler: (data : any) => {
        console.log('Você selecionou as frutas: ', data);
      }
    });

    alert.present();
  }
}
