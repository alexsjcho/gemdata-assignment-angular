import { Component, OnInit } from '@angular/core';
import { PhotoCollection } from '../../models/PhotoCollection';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collection: PhotoCollection[];

  constructor() {}

  ngOnInit() {
    this.collection = [
      { id: 1, title: 'I like a man with a bread', total_photos: 12 },
      { id: 2, title: 'Cho cho cho', total_photos: 22 },
      { id: 3, title: 'add oil oil oil ', total_photos: 123 }
    ];
  }
}
