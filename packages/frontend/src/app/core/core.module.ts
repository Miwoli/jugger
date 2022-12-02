import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EventService } from './services/event.service'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [],
  providers: [EventService],
  imports: [HttpClientModule, CommonModule]
})
export class CoreModule {}
