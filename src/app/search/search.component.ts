import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchName:string;
  
  @Output() searchOutput = new EventEmitter<any> ()


  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
    }

}
