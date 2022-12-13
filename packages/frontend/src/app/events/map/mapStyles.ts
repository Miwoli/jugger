import Style from 'ol/style/Style'
import Circle from 'ol/style/Circle'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'

export const defaultEvent = new Style({
  image: new Circle({
    fill: new Fill({
      color: '#b3e9fe' // $mat-primary.lighter
    }),
    stroke: new Stroke({
      color: '#00b6fa' // $mat-primary.main
    }),
    radius: 8
  })
})

export const selectedEvent = new Style({
  image: new Circle({
    fill: new Fill({
      color: '#0092c7' // $mat-accent.main
    }),
    stroke: new Stroke({
      color: '#b3deee' // $mat-accent.lighter
    }),
    radius: 8
  })
})

export const selectedCoordinates = new Style({
  image: new Circle({
    fill: new Fill({
      color: '#ff6d6d' // $mat-warn.main
    }),
    stroke: new Stroke({
      color: '#ff5050' // $mat-warn.darker
    }),
    radius: 8
  })
})
