import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-datetime',
  templateUrl: 'datetime.html',
})
export class DatetimePage {
  event : any = {
    month: '2018-01-06',
    timeStarts : '07:43',
    timeEnds: '2018-01-10'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
  }

}
