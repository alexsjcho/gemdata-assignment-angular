import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
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
