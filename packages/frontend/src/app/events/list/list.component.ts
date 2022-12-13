import { Component, OnInit } from '@angular/core'
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

  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this._eventService.getEvents().subscribe(events => (this.events = events))

    this._eventService.$selectedEvent.subscribe(
      event => (this.selectedEvent = event)
    )
  }

  public handleOpen(event: Event) {
    this._eventService.selectEvent(event)
  }
}
