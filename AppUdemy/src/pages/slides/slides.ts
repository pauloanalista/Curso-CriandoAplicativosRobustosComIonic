import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';



@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  @ViewChild(Slides) slides: Slides;
  constructor(private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    
  }

  slideAlterado(){
    let currentIndex = this.slides.getActiveIndex();
    
    
    this.toastCtrl.create({
      message : 'Slide ' +  currentIndex  + ' foi selecionado',
      duration: 2000,
      position : 'top'
    }).present();
  }

  avancarSlide(){
    this.slides.slideTo(2, 500);
  }
}
