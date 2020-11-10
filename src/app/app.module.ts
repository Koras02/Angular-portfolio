import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './app-header/header.component';
import { noticeComponent } from './app-notice/notice.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    noticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
