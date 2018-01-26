import { Component } from '@angular/core';
import { BotoesPage } from '../botoes/botoes';
import { CardPage } from '../card/card';
import { ToastPage } from '../toast/toast';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  
  botoesPage = BotoesPage;
  cardPage = CardPage;
  toastPage = ToastPage;

  constructor() {
  }

  ionViewDidLoad() {
    
  }

}
