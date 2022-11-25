import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MapComponent } from './events/map/map.component'
import { EventsComponent } from './events/events.component'
import { ListComponent } from './events/list/list.component'
import { HttpClientModule } from '@angular/common/http'
import { NavComponent } from './overlay/nav/nav.component'
import { FooterComponent } from './overlay/footer/footer.component'
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EventsComponent,
    ListComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
