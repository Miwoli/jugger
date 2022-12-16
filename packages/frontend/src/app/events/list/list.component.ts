import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AuthService } from 'src/app/core/auth/services/auth.service'
import { Event } from 'src/app/core/models/Event'
import { EventService } from 'src/app/core/services/event.service'

@Component({
  selector: 'jugger-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public events: Event[] = []
  public selectedEvent!: Event | null
  public activeUser!: string | null

  constructor(
    private _eventService: EventService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._authService.$isLoggedIn.subscribe(() => {
      this.activeUser = this._authService.getUsername()
    })
    this._eventService.$cachedEvents.subscribe(events => (this.events = events))
    this._eventService.$selectedEvent.subscribe(
      event => (this.selectedEvent = event)
    )

    this._eventService.fetchEvents()
  }

  public handleOpen(event: Event) {
    this._eventService.selectEvent(event)
  }

  public remove(id: number) {
    this._eventService.removeEvent(id).subscribe({
      next: () => {
        this._eventService.fetchEvents()
      }
    })
  }

  public edit() {
    this._eventService.toggleEventsListMode('edit')
  }
}
