import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

/**
 * Implement links
 */
const routes: Routes = [
  { path: '', component: SlideshowComponent }, // Need : import { [component] } from '[component path]';
  { path: 'imprint', component: ImprintComponent }, // Need: import { ImprintComponent } from './imprint/imprint.component';
  { path: 'data-protection', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
