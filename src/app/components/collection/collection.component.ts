import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { PhotoCollection } from 'src/app/models/PhotoCollection';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collection = {};

  @Input() photo: Photo;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCollection().subscribe((collection) => {
      console.log('Collection:', collection);
      this.collection = collection;
    });
  }
}
