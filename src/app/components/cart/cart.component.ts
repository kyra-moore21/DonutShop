import { Component } from '@angular/core';
import { DonutDetails } from '../../models/donut-details';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cal:number = 0;
  ngOnInit(){
    this.getCalories();
  }
  constructor(private _donutService:DonutService){}
 getCart():DonutDetails[]{
  return this._donutService.cart;
 }
 deleteItem(i:DonutDetails){
  this._donutService.removeFromCart(i);
  this.getCalories();
 }
 resetCart(){
  this._donutService.resetCart();
  this.getCalories();
 }
 getCartLength():number {
  return this._donutService.cart.length;
 }
 
 getCalories():void{
  this.cal = 0;
    this._donutService.cart.forEach(c =>  {
      this.cal += c.calories;
    });
   
 }
}
