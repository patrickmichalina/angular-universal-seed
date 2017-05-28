import { AppComponent } from './../client/app/app.component';
import { TransferState } from './../client/app/modules/transfer-state/transfer-state';
import { ServerTransferStateModule } from './../client/app/modules/transfer-state/server-transfer-state.module';
import { AppModule } from './../client/app/app.module';
import { ApplicationRef, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { NgModule } from '@angular/core';
import { ServerModule, } from '@angular/platform-server';

export function bootstrapFactory(appRef: ApplicationRef, transferState: TransferState) {
  return () => appRef.isStable
    .filter(stable => stable)
    .first()
    .subscribe(() => transferState.inject());
}

@NgModule({
  imports: [
    ServerModule,
    ServerTransferStateModule,
    AppModule
  ],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: bootstrapFactory,
      multi: true,
      deps: [
        ApplicationRef,
        TransferState
      ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
