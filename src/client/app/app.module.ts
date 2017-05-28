import { UnauthorizedModule } from './unauthorized/unauthorized.module';
import { ErrorModule } from './error/error.module';
import { LoginModule } from './login/login.module';
import { NotFoundModule } from './not-found/not-found.module';
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
    TransferHttpModule,
    AboutModule,
    HomeModule,
    LoginModule,
    ErrorModule,
    UnauthorizedModule,
    NotFoundModule,
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
