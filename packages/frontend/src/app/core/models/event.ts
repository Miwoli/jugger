export interface Event {
  id: number
  attributes: EventAttributes
}

export interface EventAttributes {
  Title: string
  Description: string
  Date: string
  Coordinates: number[]
}
