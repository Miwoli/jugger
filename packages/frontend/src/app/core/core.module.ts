import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EventService } from './services/event.service'
import { HttpClientModule } from '@angular/common/http'
import { AuthModule } from './auth/auth.module'

@NgModule({
  declarations: [],
  providers: [EventService],
  imports: [HttpClientModule, CommonModule, AuthModule]
})
export class CoreModule {}
