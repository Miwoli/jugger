import { Component, OnInit } from '@angular/core'
import { View, Map, Feature, MapBrowserEvent } from 'ol'
import { FeatureLike } from 'ol/Feature'
import { Point } from 'ol/geom'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import { OSM } from 'ol/source'
import VectorSource from 'ol/source/Vector'
import { EventService } from 'src/app/core/services/event.service'
import { Event } from '../../core/models/event'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public map!: Map
  public status!: Pick<Event, 'attributes'>

  private pointsLayer!: VectorLayer<VectorSource>
  private selected!: FeatureLike | null
  private events: Feature[] = []

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents()
    this.pointsLayer = new VectorLayer({
      source: new VectorSource({
        features: this.events
      })
    })

    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        this.pointsLayer
      ],
      target: 'map',
      view: new View({
        center: [2136892.5950993, 6824785.106882159], // Coords of somewhere in the center of Poland
        zoom: 6,
        maxZoom: 18
      })
    })

    this.map.on('pointermove', event => {
      this.selected = null
      this.onPointerMove(event)
    })

    // this.map.on('singleclick', event => {
    //   this.newEvent(event.coordinate)
    // })

    // this.eventService.getEvents().subscribe(events => console.log(events))
  }

  private getEvents(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events.map(
        event =>
          new Feature({
            geometry: new Point(event.attributes.Coordinates),
            attributes: event.attributes
          })
      )
    })
  }

  private onPointerMove(event: MapBrowserEvent<MouseEvent>) {
    this.map.forEachFeatureAtPixel(event.pixel, feature => {
      this.selected = feature

      return true
    })

    this.status = this.selected ? this.selected.get('attributes') : ''
  }
  // TODO: Use while implementing event creation
  // private newEvent(coords: number[]): void {
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
