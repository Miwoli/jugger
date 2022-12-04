import { Component, EventEmitter, Output, OnInit } from '@angular/core'
import { AuthService } from 'src/app/core/auth/services/auth.service'
import packageJson from '../../../../package.json'

@Component({
  selector: 'jugger-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() menuClicked = new EventEmitter<void>()

  public version: string = packageJson.version
  public isLoggedIn: boolean = false

  constructor(private _authService: AuthService) {}

  public ngOnInit(): void {
    this._authService.$isLoggedIn.subscribe(
      isLoggedIn => (this.isLoggedIn = isLoggedIn)
    )
  }

  public handleMenuClick(): void {
    this.menuClicked.emit()
  }

  public handleLogin(): void {
    this._authService.handleLoginProcess()
  }
}
