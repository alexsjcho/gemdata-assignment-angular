import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './components/collection/collection.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  { path: 'collection/:id', component: PhotosComponent },
  { path: 'collection', component: CollectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
