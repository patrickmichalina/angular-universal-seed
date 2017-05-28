import { CookieService } from './shared/services/cookie.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TransferHttpModule } from './modules/transfer-http/transfer-http.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    HttpModule,
    AppRoutingModule,
    AboutModule,
    HomeModule,
    TransferHttpModule,
    BrowserModule.withServerTransition({ appId: 'sd-app' }),
    SharedModule.forRoot()
  ],
  providers: [
    CookieService,
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    }],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
