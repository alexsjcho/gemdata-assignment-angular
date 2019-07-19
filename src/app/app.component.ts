import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collection: any = {};

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getCollection().subscribe((collection: any) => {
      console.log('Collection:', collection);
      this.collection = collection;
    });
  }
}
