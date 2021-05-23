import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from 'src/app/hero';
@Injectable({ 
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  configUrl: string = '/getheroes';

  getConfig() {
    return this.http.get(this.configUrl);
  }

  // showConfig() {
  //   this.getConfig()
  //     .subscribe((data: Hero) => this.config = {
          
  //     });
  // }


  
}
