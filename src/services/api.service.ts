import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = environment.API_KEY;

  API_ROOT_URL = 'https://api.unsplash.com';

  COLLECTION_ID = 2022043;

  constructor(private httpClient: HttpClient) {}

  public getCollection() {
    return this.httpClient.get(
      `${this.API_ROOT_URL}/collections/${this.COLLECTION_ID}/?client_id=${
        this.API_KEY
      }`
    );
  }

  public getPhotos() {
    return this.httpClient.get(
      `${this.API_ROOT_URL}/collections/${
        this.COLLECTION_ID
      }/photos/?client_id=${this.API_KEY}`
    );
  }
}
