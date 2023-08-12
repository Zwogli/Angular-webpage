import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {
  images = ['MathiasKohler_dark.jpg', 'coding.jpg', 'MathiasKohler_bright.jpg', 'industry_4.jpg'];
  headlines = ['Continous learning is the key to be.', 'Bring your programming skills to another Stage!', 'Inovation is the way of buisness!', 'Bring engineering to the next level!'];
  currentImage = 0;
  showImage = true;

  ngOnInit(){
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 5000);
  }
}
