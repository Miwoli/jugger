import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EventService } from './services/event.service'
import { HttpClientModule } from '@angular/common/http'
import { AuthModule } from './auth/auth.module'
import { LocalStorageService } from './services/local-storage.service'

@NgModule({
  declarations: [],
  providers: [EventService, LocalStorageService],
  imports: [HttpClientModule, CommonModule, AuthModule]
})
export class CoreModule {}
