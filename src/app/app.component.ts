import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images = ['MathiasKohler_dark.jpg', 'coding.jpg', 'MathiasKohler_bright.jpg', 'industry_4.jpg'];
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
