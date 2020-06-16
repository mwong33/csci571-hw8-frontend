import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  @Input() keywordAlert;

  alertMessage:string = "Hello There!";

  constructor() { }

  ngOnInit(): void {
  }

}
