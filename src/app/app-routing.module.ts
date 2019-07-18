import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './components/collection/collection.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  { path: 'collection/detail', component: CollectionComponent },
  { path: 'collection', component: PhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
