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
      { title: 'I like a man with a bread', total_photos: 12 },
      { title: 'Cho cho cho', total_photos: 22 },
      { title: 'add oil oil oil ', total_photos: 123 }
    ];
  }
}
