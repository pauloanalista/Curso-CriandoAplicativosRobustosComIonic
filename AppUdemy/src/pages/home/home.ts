import { Component } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor() {

  }

  redirecionarParaCurso(){
    window.open('https://www.udemy.com/criando-aplicativos-robustos-com-ionic/?couponCode=IONIC25');
  }
}
