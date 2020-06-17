import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() send:boolean;
  @Input() items:object;

  constructor() { }

  ngOnInit(): void {
  }

}
