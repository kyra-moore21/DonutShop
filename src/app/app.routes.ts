import { Routes } from '@angular/router';
import { DonutComponent } from './components/donut/donut.component';
import { CartComponent } from './components/cart/cart.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:"", redirectTo: "/donuts", pathMatch:"full"},
    //homepage
    {path:"donuts", component: DonutComponent},
    //cart
    {path:"donuts/cart", component: CartComponent},
    //details
    {path: "donuts/:id", component:DonutDetailsComponent},
    //404
    {path:"**", component: NotFoundComponent}
];
