import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: 'collection/detail', component: DetailComponent },
  { path: 'collection', component: PhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
