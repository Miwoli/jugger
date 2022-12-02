import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs'
import { Event, EventAttributes, EventsList } from '../models/event'
import { environment } from 'src/environments/environment'

@Injectable()
export class EventService {
  apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) {}

  public getEvents(): Observable<Event[]> {
    return this.httpClient
      .get<EventsList>(`${this.apiUrl}/events`)
      .pipe(map(response => response.data))
  }

  public getEvent(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${this.apiUrl}/event/${id}`)
  }

  public createEvent(eventAttrs: EventAttributes): void {
    // this.mockEvents.data.push({
    //   id: this.mockEvents.data.length + 1,
    //   attributes: {
    //     ...eventAttrs,
    //     createdAt: Date(),
    //     updatedAt: Date(),
    //     publishedAt: Date()
    //   }
    // })

    console.log(eventAttrs)
  }
}
