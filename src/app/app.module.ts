import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './app-header/header.component';
import { noticeComponent } from './app-notice/notice.component';
import { bestComponent } from './app-best/best.component';
import { categoryComponent } from './app-Category/category-component';
import { videoComponent } from './app-video/app-video.component';
import { screenComponent } from  './app-screen/scrren.component';
import { footerComponent } from './app-footer/footer.component';
import { HomeComponent } from './app-home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    noticeComponent,
    bestComponent,
    categoryComponent,
    videoComponent,
    screenComponent,
    footerComponent,
    headerComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
