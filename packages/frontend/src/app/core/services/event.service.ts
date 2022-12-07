import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, map, tap, ReplaySubject } from 'rxjs'
import {
  Event,
  EventAttributes,
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

  private _isCreateMode = new BehaviorSubject(false)
  public $isCreateMode = this._isCreateMode.asObservable()

  private _selectedLocation = new BehaviorSubject([0, 0])
  public $selectedLocation = this._selectedLocation.asObservable()

  private _selectedEvent = new BehaviorSubject<Event | null>(null)
  public $selectedEvent = this._selectedEvent.asObservable()

  public getEvents(): Observable<Event[]> {
    return this._httpClient.get<EventsList>(`${this.apiUrl}/events`).pipe(
      map(response => response.data),
      tap(data => this._$cachedEvents.next(data))
    )
  }

  public getEvent(id: number): Observable<Event> {
    return this._httpClient.get<Event>(`${this.apiUrl}/event/${id}`)
  }

  public createEvent(eventAttrs: EventAttributes): Observable<Event> {
    return this._httpClient
      .post<EventResponse>(`${this.apiUrl}/events`, { data: { ...eventAttrs } })
      .pipe(map(res => res.data))
  }

  public toggleCreateMode(val: boolean): void {
    this._isCreateMode.next(val)
    this._selectedLocation.next([0, 0])
  }

  public selectCoordinates(coords: number[]): void {
    this._selectedLocation.next(coords)
  }

  public selectEvent(event: Event): void {
    console.log(event)
    this._selectedEvent.next(event)
  }
}
