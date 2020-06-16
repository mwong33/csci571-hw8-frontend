import { Component, OnInit } from '@angular/core';
import { FormElements } from '../../models/FormElements'

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
  formElements:FormElements={};

  send:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // The search method
  search() {

    // Validate the keywords field
    this.validateKeywords();

    // Validate the prices
    this.validatePrice();

    // Verify if we can send the request
    if (!this.keywordsAlert && !this.priceAlert) {
      this.send = true;
    } else {
      this.send = false;
    }

    console.log(this.formElements);

  }

  // The clear method
  clear() {

    // Clear out the Alert Components
    this.keywordsAlert = false;
    this.priceAlert = false;
    this.send=false;
  }

  // keywords validation helper function
  validateKeywords() {
    if (this.formElements.keywords == null) {
      this.keywordsAlert = true;
    }
    else if (this.formElements.keywords.length == 0) {
      this.keywordsAlert = true;
    } else {
      this.keywordsAlert = false;
    }
  }

  // price validation helper function
  validatePrice() {
    if ((this.formElements.priceFrom != null && this.formElements.priceFrom < 0) || 
    (this.formElements.priceTo != null && this.formElements.priceTo < 0)) {
      this.priceAlert = true;
    } else if ((this.formElements.priceFrom != null && this.formElements.priceTo != null) && 
    (this.formElements.priceFrom > this.formElements.priceTo)) {
      this.priceAlert = true;
    } else {
      this.priceAlert = false;
    }

  }

}
