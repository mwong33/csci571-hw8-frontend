import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() send:boolean;
  @Input() items:object;
  data:Array<any>;
  totalRecords:number;
  page:number=1;

  constructor() { }

  ngOnInit(): void {
    this.prepareForPagination(this.items);
  }

  // Extract data fields for pagination
  prepareForPagination(items:object) {

    if (!items) { 
      return; 
    }

    this.data = items["items"];
    this.totalRecords = items["itemCount"];
  }
}
