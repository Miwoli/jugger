import { Component, EventEmitter, Output } from '@angular/core'
import packageJson from '../../../../package.json'

@Component({
  selector: 'jugger-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() menuClicked = new EventEmitter<void>()

  public version: string = packageJson.version

  constructor() {}

  public handleMenuClick(): void {
    this.menuClicked.emit()
  }
}
