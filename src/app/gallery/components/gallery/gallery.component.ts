import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public images = [];

  constructor(
    private assetsService: AssetsService
  ) { }

  ngOnInit(): void {
    this.images = this.assetsService.getImages().map(list => list.map(image => ({
      image,
      thumbImage: image
    })));
  }

  public get mobile() {
    return window.innerWidth < 992;
  }
}
