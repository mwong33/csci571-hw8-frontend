import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormElements } from 'src/app/models/FormElements';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() send:boolean;
  @Input() formElements:FormElements;

  readonly ROOT_URL:string = "https://mjwong-csci-571-hw8.wl.r.appspot.com";
  items:object;

  constructor(private http: HttpClient) { }

  getItems() {

    let requestURL = this.ROOT_URL + `/items?keywords=${this.formElements.keywords}`;

    for (let [key, value] of Object.entries(this.formElements)) {
      if (value != null) {
        requestURL += `&${key}=${value}`;
      }
    }

    this.items = this.http.get(requestURL);

    console.log(this.items);

  }

  ngOnInit(): void {

  }

}
