import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor() { }

  getImages() {
    return [[
      'https://i.picsum.photos/id/1/600/400.jpg',
      'https://i.picsum.photos/id/2/600/400.jpg',
      'https://i.picsum.photos/id/3/600/400.jpg',
      'https://i.picsum.photos/id/4/600/400.jpg',
      'https://i.picsum.photos/id/5/600/400.jpg',
    ], [
      'https://i.picsum.photos/id/6/600/400.jpg',
      'https://i.picsum.photos/id/7/600/400.jpg',
      'https://i.picsum.photos/id/8/600/400.jpg',
      'https://i.picsum.photos/id/9/600/400.jpg',
      'https://i.picsum.photos/id/10/600/400.jpg',
    ], [
      'https://i.picsum.photos/id/11/600/400.jpg',
      'https://i.picsum.photos/id/12/600/400.jpg',
      'https://i.picsum.photos/id/13/600/400.jpg',
      'https://i.picsum.photos/id/14/600/400.jpg',
      'https://i.picsum.photos/id/15/600/400.jpg',
    ], [
      'https://i.picsum.photos/id/16/600/400.jpg',
      'https://i.picsum.photos/id/17/600/400.jpg',
      'https://i.picsum.photos/id/18/600/400.jpg',
      'https://i.picsum.photos/id/19/600/400.jpg',
      'https://i.picsum.photos/id/20/600/400.jpg',
    ]];
  }
}
