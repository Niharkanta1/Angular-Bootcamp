import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

export interface UnsplashResponse {
  id: string;
  tags: {
    type: string;
    title: string;
  }[];
  user: {
    username: string;
    name: string;
    location: string;
    profile_image: {
      small: string;
      medium: string;
    };
    instagram_username: string;
  };
  urls: {
    regular: string; 
  };
  likes: number;
  views: number;
  downloads: number;
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID gvzXP1RIJlYMy2CVQd7AGEjodoqtP18kWYnwMrXAYb0'
      }
    });
  }
}
