import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MapComponent } from './events/map/map.component'
import { EventsComponent } from './events/events.component'
import { ListComponent } from './events/list/list.component'
import { EventService } from './core/services/event.service'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, MapComponent, EventsComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {}
