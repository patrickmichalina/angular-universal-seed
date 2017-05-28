import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ErrorRoutingModule, SharedModule],
  declarations: [ErrorComponent],
  exports: [ErrorComponent]
})
export class ErrorModule { }
