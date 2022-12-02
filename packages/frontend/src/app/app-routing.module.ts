import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EventsComponent } from './events/events.component'
import packageJson from '../../package.json'

const routes: Routes = [
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./privacy-policy/privacy-policy.module').then(
        m => m.PrivacyPolicyModule
      )
  },
  {
    path: '',
    pathMatch: 'full',
    component: EventsComponent,
    title: `Jugger App v.${packageJson.version}`
  },
  { path: '**', component: EventsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
