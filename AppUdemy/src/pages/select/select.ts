import { Component } from '@angular/core';



@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {
  selectOptions : any;
  constructor() {
  }

  ionViewDidLoad() {
    this.selectOptions = {
      title : 'Frutas frescas',
      subTitle : 'Selecione a fruta mais doce',
      mode : 'ios'
    };
  }

}
