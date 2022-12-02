import { Component, EventEmitter, Output } from '@angular/core'
import { AuthService } from 'src/app/core/auth/services/auth.service'
import packageJson from '../../../../package.json'

@Component({
  selector: 'jugger-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() menuClicked = new EventEmitter<void>()

  public version: string = packageJson.version

  constructor(private authService: AuthService) {}

  public handleMenuClick(): void {
    this.menuClicked.emit()
  }

  public handleLogin(): void {
    this.authService.openAuthModal()
  }
}
