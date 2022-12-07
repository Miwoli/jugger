import { Component, OnInit } from '@angular/core'
import { EventService } from '../core/services/event.service'

@Component({
  selector: 'jugger-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  constructor(private _eventService: EventService) {}

  public isCreateMode!: boolean

  ngOnInit(): void {
    this._eventService.$isCreateMode.subscribe(
      value => (this.isCreateMode = value)
    )
  }
}
