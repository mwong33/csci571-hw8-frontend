import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // The search method
  search() {
    console.log("searching...");
  }

  // The clear method
  clear() {
    console.log("clearing...");
  }

}
