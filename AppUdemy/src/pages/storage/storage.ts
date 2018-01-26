import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {

  ultimoBotaoPressionado : any;
  constructor(private storage: Storage) {
  }

  ionViewDidLoad() {
    
    this.storage.get('ultimoBotaoPressionado').then((val) => {
      console.log(val);
      this.ultimoBotaoPressionado = val;
    });
  }

  botao1(){
    //Usando componente do ionic
    this.storage.set('ultimoBotaoPressionado', 1);

    //Usando javascript tradicional
    localStorage.setItem('opcao', '1');

    sessionStorage.setItem('opcao', '1');
  }

  botao2(){
    //Usando componente do ionic
    this.storage.set('ultimoBotaoPressionado', 2);

    //Usando javascript tradicional
    localStorage.setItem('opcao', '2');

    
  }

}
