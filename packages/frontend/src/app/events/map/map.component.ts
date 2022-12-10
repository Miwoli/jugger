import { AfterViewInit, Component, OnInit } from '@angular/core'
import { View, Map, Feature } from 'ol'
import { FeatureLike } from 'ol/Feature'
import { Point } from 'ol/geom'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import { OSM } from 'ol/source'
import VectorSource from 'ol/source/Vector'
import Style from 'ol/style/Style'
import { EventService } from 'src/app/core/services/event.service'
import { Event } from '../../core/models/Event'

@Component({
  selector: 'jugger-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  public map!: Map
  public status!: Pick<Event, 'attributes'>

  public pointsLayer!: VectorLayer<VectorSource>
  private _selected!: FeatureLike | null
  private _events: Feature[] = []
  private _isEditMode!: boolean

  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this._getEvents()
    this.pointsLayer = new VectorLayer({
      source: new VectorSource({
        features: this._events
      })
    })

    this._eventService.$isCreateMode.subscribe(
      isEdit => (this._isEditMode = isEdit)
    )

    this._eventService.$selectedEvent.subscribe(event => {
      this._selectEvent(event)
    })
  }

  ngAfterViewInit(): void {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        this.pointsLayer
      ],
      target: 'map',
      view: new View({
        center: [2137892.5950993, 6824785.106882159], // Coords of somewhere in the center of Poland
        zoom: 6,
        maxZoom: 18
      })
    })

    this.map.on('singleclick', event => {
      if (this._isEditMode) {
        this._eventService.selectCoordinates(event.coordinate)
      } else {
        this.map.forEachFeatureAtPixel(event.pixel, feature => {
          this._eventService.selectEvent(feature.get('attributes'))

          return true
        })
      }
    })
  }

  private _getEvents(): void {
    this._eventService.$cachedEvents.subscribe(events => {
      this._events = events.map(
        event =>
          new Feature({
            geometry: new Point(event.attributes.Coordinates),
            id: event.id,
            attributes: event
          })
      )

      this.pointsLayer.getSource()?.addFeatures(this._events)
    })
  }

  private _selectEvent(event: Event): void {
    this.pointsLayer
      .getSource()
      ?.getFeatureById(event.id)
      ?.setStyle(new Style({ fill: '#ff0000' }))
  }

  // TODO: Use while implementing event creation
  // private _newEvent(coords: number[]): void {
  //   this.eventService.createEvent({
  //     Title: 'Lorem ipsum',
  //     Description: 'Lorem ipsum dolor sit amet',
  //     Date: Date(),
  //     Coordinates: coords
  //   })

  //   this.getEvents()
  //   this.pointsLayer.getSource()?.addFeature(
  //     new Feature({
  //       geometry: new Point(coords),
  //       name: 'lorem ipsum'
  //     })
  //   )
  // }
}
