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
  }

}
