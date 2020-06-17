import { Component, OnInit } from '@angular/core';
import { FormElements } from '../../models/FormElements'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  // Alert elements
  keywordsAlert:boolean = false;
  priceAlert:boolean = false;
  searchAlert:boolean = false;
  
  // Form elements
  formElements:FormElements={
    sortBy: "BestMatch"
  };

  // HTTP
  send:boolean = false;
  readonly ROOT_URL:string = "https://mjwong-csci-571-hw8.wl.r.appspot.com";
  items:object;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // The search method
  search() {
    // Set searchAlert back to false
    this.searchAlert = false;

    // Validate the keywords field
    this.validateKeywords();

    // Validate the prices
    this.validatePrice();

    // Verify if we can send the request
    if (!this.keywordsAlert && !this.priceAlert) {
      this.getItems().subscribe(items => {
        this.items = items;
        
        if (Object.keys(this.items).length == 0) {
          this.searchAlert = true;
        } else {
          this.send = true;
        }
        console.log(this.items);
      });
    } else {
      this.send = false;
    }
  }

  // The clear method
  clear() {

    // Clear out the Alert Components
    this.keywordsAlert = false;
    this.priceAlert = false;
    this.searchAlert = false;
    this.send = false;
  }

  // HTTP Request method to GET Items
  getItems() {

    let requestURL = this.ROOT_URL + `/items?keywords=${this.formElements.keywords}`;

    for (let [key, value] of Object.entries(this.formElements)) {
      if (key != "keywords" && value != null) {
        requestURL += `&${key}=${value}`;
      }
    }

    console.log(requestURL);

    return this.http.get(requestURL);
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
