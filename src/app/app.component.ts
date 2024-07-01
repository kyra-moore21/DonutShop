import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DonutService } from './services/donut.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DonutShop';
  constructor(private _donutService:DonutService) {}

  getCartCount():number{
    return this._donutService.cart.length;
  }
}
