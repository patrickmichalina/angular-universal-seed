import { UnauthorizedComponent } from './unauthorized.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'unauthorized', component: UnauthorizedComponent }
    ])
  ],
  exports: [RouterModule]
})
export class UnauthorizedRoutingModule { }
