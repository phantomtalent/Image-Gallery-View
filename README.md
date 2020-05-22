# ImageGallery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Using Angular Image Slider with Lightbox Library
Note: If you want to integrate this library to existed project, please install
`npm install ng-image-slider --save`

## Installation

`npm install`

### Used API Reference

| Name          | Type            | DataType | Description | Default |
| :------------ |:---------------:| :-----:  | :-----:     | -----:|
| imageSize     | @Input          | object   | `{width: '400px', height: '300px', space: 4}` or `{width: '20%', height: '20%'}` OR `{space: 4}`  | `{width: 205, height: 200, space: 3}` |
| manageImageRatio | @Input       | boolean  |   `true` or `false` | `false` |

### Used Directive

`*ngFor`

## Setup:

### Import module in your app.module.ts:

```
import { NgImageSliderModule } from 'ng-image-slider';
...
 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NgImageSliderModule,
        ...
    ],
    providers: [],
    bootstrap: [AppComponent]
})
 
export class AppModule {
}
```

### Create new component(gallery) and add below in your template file.

`ng generate component gallery`

```
<div *ngFor="let list of images" class="image-list">
  <ng-image-slider
    [images]="list"
    [imageSize]="{ width: mobile ? '32%' : '19%', height: 'auto', space: mobile ? 2 : 3 }"
    [manageImageRatio]="true"
  ></ng-image-slider>
</div>
```

### Create assets service and import images.

`ng generate service assets`
```
getImages() {
    return [
      [
        'https://i.picsum.photos/id/1/600/400.jpg',
        'https://i.picsum.photos/id/2/600/400.jpg',
        'https://i.picsum.photos/id/3/600/400.jpg',
        'https://i.picsum.photos/id/4/600/400.jpg',
        'https://i.picsum.photos/id/5/600/400.jpg',
      ],
      ...
    ];
  }
```
### Import assets service to gallery module and add below

```
ngOnInit(): void {
    this.images = this.assetsService.getImages().map(list => list.map(image => ({
      image,
      thumbImage: image
    })));
}
```

### In case mobile, show 3 images of all

Add below to gallery module

```
public get mobile() {
  return window.innerWidth < 992;
}
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
