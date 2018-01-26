import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CepProvider {

  constructor(public http: Http) {
    
  }

  listarEndereco(cep : number){
    let url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.get(url, { headers: headers }).toPromise();
  }
}
