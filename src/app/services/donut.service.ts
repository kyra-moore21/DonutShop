import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutModel } from '../models/donut';
import { DonutDetails } from '../models/donut-details';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http:HttpClient) { }

    cart:DonutDetails[] = [];
  getDonuts():Observable<DonutModel>{
    return this.http.get<DonutModel>(`https://grandcircusco.github.io/demo-apis/donuts.json`)
  }
  getDonutsById(id:number):Observable<DonutDetails>{
    return this.http.get<DonutDetails>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`)
  }

  addToCart(d:DonutDetails){
      this.cart.push(d);
      console.log(this.cart);
  }
  removeFromCart(d:DonutDetails){
    let index:number = this.cart.findIndex(x => x.id = d.id);
    this.cart.splice(index, 1);
  }
  resetCart(){
    this.cart = [];
  }
}
