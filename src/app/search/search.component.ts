import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchOutput = new EventEmitter<any> ()
  searchName:string;
  

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
    }

}
