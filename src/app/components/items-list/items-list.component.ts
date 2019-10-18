import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../shared/service/rest-api.service";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  Item: any = [];
  key: string = 'name'; //set default
  reverse: boolean = false;

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
  	this.loadItems()
  }

   // Get items list
  loadItems() {
    return this.restApi.getItems().subscribe((data: {}) => {
      this.Item = data;
    })
  }

  // Delete item
  deleteItem(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteItem(id).subscribe(data => {
        this.loadItems()
      })
    }
  }  

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
