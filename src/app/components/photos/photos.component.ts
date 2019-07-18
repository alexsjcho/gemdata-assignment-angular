import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any[] = [];
  // @Input() photo: Photo;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPhotos().subscribe((photos: any[]) => {
      console.log('Photos', photos);
      this.photos = photos;
    });
  }
}
