import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collection = {};

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getCollection().subscribe((collection) => {
      console.log('Collection:', collection);
      this.collection = collection;
    });
    if (!this.getCurrentPhoto()) {
      this.router.navigateByUrl('/collection');
    }
  }

  getCurrentPhoto() {
    return this.apiService.getCurrentPhoto();
  }
}
