import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties : Array<any> = [
    {
      "Id" : 1,
      "Name" : "Birla House",
      "Type": "House",
      "Price": 12000
   },

    {
      "Id" : 2,
      "Name" : "Ambani House",
      "Type": "House",
      "Price": 19000
   },
    {
      "Id" : 3,
      "Name" : "Tata House",
      "Type": "House",
      "Price": 20000
   },
    {
      "Id" : 4,
      "Name" : "Jaypee Kosmos",
      "Type": "Reny",
      "Price": 5000
   },
    {
      "Id" : 5,
      "Name" : "Jaypee Aman",
      "Type": "Rent",
      "Price": 2000
   },
    {
      "Id" : 6,
      "Name" : "Maya",
      "Type": "Rent",
      "Price": 9000
   }

]
  constructor() { }

  ngOnInit(): void {
  }

}
