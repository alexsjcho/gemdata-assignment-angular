import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionComponent } from './components/collection/collection.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './components/photos/photos.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [AppComponent, CollectionComponent, PhotosComponent, DetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
