import { Component } from '@angular/core';



@Component({
  selector: 'page-range',
  templateUrl: 'range.html',
})
export class RangePage {
  brilhoDaTela : number = 100;
  brilhoDaTela2 : number = 100;
  taxa : number = 1000;
  faixaEtaria: any = {lower:16, upper:60};
  constructor() {
  }

  ionViewDidLoad() {
    
  }

}
