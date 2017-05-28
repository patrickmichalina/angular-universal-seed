import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent { }
