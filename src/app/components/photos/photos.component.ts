import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPhotos().subscribe((photos) => {
      console.log('Photos', photos);
      this.photos = photos;
    });
  }
}
