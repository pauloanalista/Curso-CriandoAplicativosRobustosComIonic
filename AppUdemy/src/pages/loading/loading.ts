import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {
 
  constructor(public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let aguarde = this.loadingCtrl.create({
      content: "Por favor aguarde...",
      duration: 1000
    });

    aguarde.present();

  }

  salvar() {
    let aguarde = this.loadingCtrl.create({
      content: "Salvando dados...",
    });

    aguarde.present();
   
    //Processar algo
    setTimeout(()=>{
      console.log('Dados salvo com sucesso!');
      aguarde.dismiss();
    }, 5000);
  }

  salvarCustomizado(){
    let aguardeCustomizado = this.loadingCtrl.create({
      spinner : 'hide',
      content : `<div class="custom-spinner-container">
                  <div class="custom-spinner-box"></div>
                </div>`,
      duration: 5000
    });

    aguardeCustomizado.onDidDismiss(()=>{
      alert('Aguarde foi encerrado');
    });

    aguardeCustomizado.present();
  }

  salvarSemSpinner(){
    let aguarde = this.loadingCtrl.create({
      spinner : 'hide',
      content: "Por favor aguarde...",
    });

    aguarde.present();

    setTimeout(()=>{
      //console.log('Dados salvo com sucesso!');
      aguarde.dismiss();
    }, 5000);
  }
  
  salvarComSpinnerDiferente(){
    let aguarde1 = this.loadingCtrl.create({
      spinner : 'dots',
      content: "spinner -> dots",
      duration: 3000
    });

    aguarde1.present();

    aguarde1.onDidDismiss(()=>{
      let aguarde2 = this.loadingCtrl.create({
        spinner : 'ios',
        content: "spinner -> ios",
        duration: 3000
      });
  
      aguarde2.present();

      aguarde2.onDidDismiss(()=>{
        let aguarde3 = this.loadingCtrl.create({
          spinner : 'bubbles',
          content: "spinner -> bubbles",
          duration: 3000
        });
    
        aguarde3.present();

        aguarde3.onDidDismiss(()=>{
          let aguarde4 = this.loadingCtrl.create({
            spinner : 'circles',
            content: "spinner -> circles",
            duration: 3000
          });
      
          aguarde4.present();

          aguarde4.onDidDismiss(()=>{
            let aguarde5 = this.loadingCtrl.create({
              spinner : 'crescent',
              content: "spinner -> crescent",
              duration: 3000
            });
        
            aguarde5.present();
          });
        });
      });
    });

    
  }
}
