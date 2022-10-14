import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MapComponent } from './events/map/map.component'
import { EventsComponent } from './events/events.component'
import { ListComponent } from './events/list/list.component'
import { EventService } from './core/services/event.service'
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './overlay/nav/nav.component';
import { FooterComponent } from './overlay/footer/footer.component';
import { IconButtonComponent } from './shared/icon-button/icon-button.component'

@NgModule({
  declarations: [AppComponent, MapComponent, EventsComponent, ListComponent, NavComponent, FooterComponent, IconButtonComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {}
