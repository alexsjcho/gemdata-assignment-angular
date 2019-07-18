import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '81ce9c934431fb7027da435cf1448f3f4f2eedf08c72a5db94d6f8ff86847dc9';

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
