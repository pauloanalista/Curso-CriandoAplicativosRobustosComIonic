import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';



@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  foto : any;
  constructor(private camera : Camera,  private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
  
  }

  tirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType : this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData)=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      
      this.foto = base64Image;
    },(err)=>{
      this.toastCtrl.create({
        message : 'Não foi possível tirar a foto!',
        duration: 2000,
        position : 'top'
      }).present();
    });
  }

}
