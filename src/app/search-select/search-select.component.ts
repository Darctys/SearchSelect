import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.css']
})
export class SearchSelectComponent implements OnInit {

  selectedValue: any;
  searchTxt: any;

  items = [{
    value : 100,
    viewValue : 100
  },{
    value : 200,
    viewValue : 200
  },{
    value : 300,
    viewValue : 300
  }];

  constructor() { }

  ngOnInit(): void {
  }
  public value (){
    console.log(this.selectedValue);
  }
}
