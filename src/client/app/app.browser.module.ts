import { TransferState } from './modules/transfer-state/transfer-state';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { BrowserTransferStateModule } from './modules/transfer-state/browser-transfer-state.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export function getRequest(transferState: TransferState) {
  return transferState.get('req');
}

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'sd-app'
    }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    AppModule
  ],
  providers: [
    // {
    //   provide: REQUEST,
    //   useFactory: getRequest,
    //   deps: [
    //     TransferState
    //   ]
    // }
  ]
})
export class AppBrowserModule { }
