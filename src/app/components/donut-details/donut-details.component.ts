import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutService } from '../../services/donut.service';
import { DonutDetails } from '../../models/donut-details';

@Component({
  selector: 'app-donut-details',
  standalone: true,
  imports: [],
  templateUrl: './donut-details.component.html',
  styleUrl: './donut-details.component.css'
})
export class DonutDetailsComponent {
constructor(private activatedRoute: ActivatedRoute, private _donutService:DonutService){}
donutResult: DonutDetails = {} as DonutDetails;
ngOnInit() {
  this.activatedRoute.paramMap.subscribe((paramMap) => {
    let id:number = Number(paramMap.get("id"));
    // console.log(id);
      this._donutService.getDonutsById(id).subscribe((response: DonutDetails) => {    
        this.donutResult = response;
        // console.log(this.donutResult);        
      });
    
  });
}

addToCart(){
  this._donutService.addToCart(this.donutResult);
}
}


