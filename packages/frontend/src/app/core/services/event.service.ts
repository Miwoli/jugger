import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, map, tap, ReplaySubject } from 'rxjs'
import {
  Event,
  EventAttributes,
  EventsListMode,
  EventResponse,
  EventsList
} from '../models/Event'
import { environment } from 'src/environments/environment'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

@Injectable()
export class EventService {
  apiUrl = environment.apiUrl

  constructor(private _httpClient: HttpClient) {}

  private _$cachedEvents = new ReplaySubject<Event[]>()
  public $cachedEvents: Observable<Event[]> = this._$cachedEvents.asObservable()

  private _eventsListMode = new BehaviorSubject<EventsListMode>('list')
  public $eventsListMode = this._eventsListMode.asObservable()

  private _selectedLocation = new ReplaySubject<number[]>()
  public $selectedLocation = this._selectedLocation.asObservable()

  private _selectedEvent = new BehaviorSubject<Event | null>(null)
  public $selectedEvent = this._selectedEvent.asObservable()

  private _events!: Event[]
  private _$events = new BehaviorSubject(this._events)
  public $events = this._$events.asObservable()

  public fetchEvents(): void {
    this._httpClient
      .get<EventsList>(`${this.apiUrl}/events`)
      .pipe(
        map(response => response.data),
        tap(data => this._$cachedEvents.next(data))
      )
      .subscribe()
  }

  public getEvent(id: number): Observable<Event> {
    return this._httpClient.get<Event>(`${this.apiUrl}/event/${id}`)
  }

  public createEvent(eventAttrs: EventAttributes): Observable<Event> {
    return this._httpClient
      .post<EventResponse>(`${this.apiUrl}/events`, { data: { ...eventAttrs } })
      .pipe(map(res => res.data))
  }

  public editEvent(id: number, eventAttrs: EventAttributes): Observable<Event> {
    return this._httpClient
      .put<EventResponse>(`${this.apiUrl}/events/${id}`, {
        data: { ...eventAttrs }
      })
      .pipe(map(res => res.data))
  }

  public removeEvent(id: number): Observable<void> {
    return this._httpClient
      .delete<void>(`${this.apiUrl}/events/${id}`)
      .pipe(tap(() => {}))
  }

  public toggleEventsListMode(val: EventsListMode): void {
    this._eventsListMode.next(val)
  }

  public selectCoordinates(coords: number[]): void {
    this._selectedLocation.next(coords)
  }

  public selectEvent(event: Event | null): void {
    this._selectedEvent.next(event)
  }
}
