import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';

import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    NgImageSliderModule
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
