import { Component, OnInit } from '@angular/core'
import { Event } from 'src/app/core/models/event'
import { EventService } from 'src/app/core/services/event.service'

@Component({
  selector: 'jugger-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public events: Event[] = []

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events
    })
  }
}
