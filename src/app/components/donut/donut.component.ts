import { Component } from '@angular/core';
import { DonutModel } from '../../models/donut';
import { DonutService } from '../../services/donut.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent {
 

 constructor(private _donutService:DonutService){}

 donutResult: DonutModel = {} as DonutModel;

 ngOnInit():void{
  this.callApi();
 }

 callApi(){
  this._donutService.getDonuts().subscribe((reponse:DonutModel) => {
    console.log(reponse);
    this.donutResult = reponse;
  })

 }
}
