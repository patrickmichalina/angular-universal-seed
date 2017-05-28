import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'scowtee-error',
  templateUrl: 'error.component.html',
  styleUrls: ['error.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent {
  email = 'support@website.com';
  message$ = this.router.queryParams.map(e => {
    switch (e.code) {
      case '0': return 'Could not connect to the remote server. Please try again later';
      default: return 'An unknown error occured';
    }
  });
  constructor(private router: ActivatedRoute) { }

}
