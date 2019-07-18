import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collection = {};

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCollection().subscribe((collection) => {
      console.log('Collection:', collection);
      this.collection = collection;
    });
  }
}
