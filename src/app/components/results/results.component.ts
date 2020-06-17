import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() send:boolean;
  @Input() items:object;
  @Input() keywords:string;
  keywordsResult:string;
  detailsButtonText:string="Show Details";
  details:boolean=false;
  
  data:Array<any>;
  totalRecords:number;
  page:number=1;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed and send is true
    if (this.send) {
      if (changes['items']) {
        this.prepareForPagination(this.items);
        this.keywordsResult = this.keywords;
      }
    }
  }

  // Extract data fields for pagination
  prepareForPagination(items:object) {

    if (!items) { 
      return; 
    }

    this.data = items["items"];
    this.totalRecords = items["itemCount"];
  }

  // Show/Hide Details Click Method
  showHideDetails() {
    if (this.detailsButtonText == "Show Details") {
      this.details = true;
      this.detailsButtonText = "Hide Details";
    } else {
      this.details = false;
      this.detailsButtonText = "Show Details";
    }
  }
}
