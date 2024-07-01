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
  
  constructor(private _donutService:DonutService){}
 getCart():DonutDetails[]{
  return this._donutService.cart;
 }
 deleteItem(i:DonutDetails){
  this._donutService.removeFromCart(i);

 }
 resetCart(){
  this._donutService.resetCart();

 }
 
 getCalories():number{ 
  return this._donutService.cart.reduce((total:number, current:DonutDetails) => total + current.calories ,0)
 }

 getCartDistinct():DonutDetails[]{
  let map = new Map(this._donutService.cart.map(pos => [pos.id, pos]));
  return [...map.values()];
 }

 getItemQuantity(i:DonutDetails):number{
  return this._donutService.cart.reduce((total:number, current:DonutDetails) => current == i ? total + 1: total, 0);
 }
}
