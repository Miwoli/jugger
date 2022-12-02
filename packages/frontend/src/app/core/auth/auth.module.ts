import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthModalComponent } from './auth-modal/auth-modal.component'
import { AuthService } from './services/auth.service'

@NgModule({
  declarations: [AuthModalComponent],
  imports: [CommonModule],
  providers: [AuthService]
})
export class AuthModule {}
