import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EventService } from './services/event.service'
import { HttpClientModule } from '@angular/common/http'
import { DomService } from './services/dom.service'

@NgModule({
  declarations: [],
  providers: [EventService, DomService],
  imports: [HttpClientModule, CommonModule]
})
export class CoreModule {}
