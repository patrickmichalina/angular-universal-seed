import { ErrorComponent } from './error.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'error', component: ErrorComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
