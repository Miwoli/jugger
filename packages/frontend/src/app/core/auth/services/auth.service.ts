import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AuthModalComponent } from '../auth-modal/auth-modal.component'

@Injectable()
export class AuthService {
  constructor(public modal: MatDialog) {}

  public openAuthModal() {
    this.modal.open(AuthModalComponent, {
      width: '400px'
    })
  }
}
