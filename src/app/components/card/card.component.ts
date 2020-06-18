import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item:any;
  @Input() hideDetails:boolean;
  @Input() detailsButtonText:string;

  expeditedShippingIconPath:string="";
  oneDayShippingAvailableIconPath:string="";

  constructor() { }

  ngOnInit(): void {
  }

  showHideDetails() {
    if (this.detailsButtonText == "Show Details") {
      this.hideDetails = false;
      this.detailsButtonText = "Hide Details";
    } else {
      this.hideDetails = true;
      this.detailsButtonText = "Show Details";
    }

    if (this.item["expeditedShipping"] == "true") {
      this.expeditedShippingIconPath = "assets/img/check.svg";
    } else {
      this.expeditedShippingIconPath = "assets/img/cross.svg";
    }

    if (this.item["oneDayShippingAvailable"] == "true") {
      this.oneDayShippingAvailableIconPath = "assets/img/check.svg"
    } else {
      this.oneDayShippingAvailableIconPath = "assets/img/cross.svg"
    }

  }

}
