import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  // Alert elements
  keywordsAlert:boolean = false;
  priceAlert:boolean = false;

  // Form elements
  keywords:string = "";
  priceFrom:number;
  priceTo:number;
  conditionNew:boolean;
  conditionUsed:boolean;
  conditionVeryGood:boolean;
  conditionGood:boolean;
  conditionAcceptable:boolean;
  returnAccepted:boolean;
  freeShipping:boolean;
  expeditedShipping:boolean;
  sortBy:string;

  constructor() { }

  ngOnInit(): void {
  }

  // The search method
  search() {

    // Validate the keywords field
    this.validateKeywords();

    // Validate the prices
    this.validatePrice();

  }

  // The clear method
  clear() {

    // Clear out the Alert Components
    this.keywordsAlert = false;
    this.priceAlert = false;
  }

  // keywords validation helper function
  validateKeywords() {
    if (this.keywords == null) {
      this.keywordsAlert = true;
    }
    else if (this.keywords.length == 0) {
      this.keywordsAlert = true;
    } else {
      this.keywordsAlert = false;
    }
  }

  // price validation helper function
  validatePrice() {
    if ((this.priceFrom != null && this.priceFrom < 0) || (this.priceTo != null && this.priceTo < 0)) {
      this.priceAlert = true;
    } else if ((this.priceFrom != null && this.priceTo != null) && (this.priceFrom > this.priceTo)) {
      this.priceAlert = true;
    } else {
      this.priceAlert = false;
    }

  }

}
