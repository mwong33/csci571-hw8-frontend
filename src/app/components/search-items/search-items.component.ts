import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  keywordAlert:boolean = false;
  priceAlert:boolean = false;
  keywords:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // The search method
  search() {
    console.log("searching...");

    if (this.keywords == null) {
      console.log("keywords empty!!!");
      this.keywordAlert = true;
    }
    else if (this.keywords.length == 0) {
      console.log("keywords 0!!!");
      this.keywordAlert = true;
    } else {
      console.log("keywords good!");
      this.keywordAlert = false;
    }

  }

  // The clear method
  clear() {
    console.log("clearing...");
  }

}
