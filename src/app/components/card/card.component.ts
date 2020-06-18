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
  expeditedShippingColor:string="";

  oneDayShippingAvailableIconPath:string="";
  oneDayShippingAvailableColor:string="";

  bestOfferEnabled:string="";
  bestOfferEnabledColor:string="";

  buyItNowAvailable:string="";
  buyItNowAvailableColor:string="";

  gift:string="";
  giftColor:string="";

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
    };

    if (this.item["expeditedShipping"] == "true") {
      this.expeditedShippingIconPath = "done";
      this.expeditedShippingColor = "green";
    } else {
      this.expeditedShippingIconPath = "clear";
      this.expeditedShippingColor = "red";
    };

    if (this.item["oneDayShippingAvailable"] == "true") {
      this.oneDayShippingAvailableIconPath = "done";
      this.oneDayShippingAvailableColor = "green";
    } else {
      this.oneDayShippingAvailableIconPath = "clear";
      this.oneDayShippingAvailableColor = "red";
    };

    if (this.item["bestOfferEnabled"] == "true") {
      this.bestOfferEnabled = "done";
      this.bestOfferEnabledColor = "green";
    } else {
      this.bestOfferEnabled = "clear";
      this.bestOfferEnabledColor = "red";
    };

    if (this.item["buyItNowAvailable"] == "true") {
      this.buyItNowAvailable = "done";
      this.buyItNowAvailableColor = "green";
    } else {
      this.buyItNowAvailable = "clear";
      this.buyItNowAvailableColor = "red";
    };

    if (this.item["gift"] == "true") {
      this.gift = "done";
      this.giftColor = "green";
    } else {
      this.gift = "clear";
      this.giftColor = "red";
    }

  }

}
