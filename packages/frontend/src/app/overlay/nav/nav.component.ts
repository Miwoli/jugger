import { Component } from '@angular/core';
import packageJson from '../../../../package.json'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public version: string = packageJson.version

  constructor() { }
}
