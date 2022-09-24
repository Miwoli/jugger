import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { of, Observable, filter, first, tap, map } from 'rxjs'
import { Event, EventAttributes } from '../models/event'

@Injectable()
export class EventService {
  mockEvents = {
    data: [
      {
        id: 1,
        attributes: {
          Title: 'Test event',
          Description:
            'Vel euismod dolor lorem diam. Sit aliquam eirmod dolore kasd consetetur eros invidunt tempor et invidunt duis dolore amet ut. Dolor rebum duis consequat. Diam voluptua erat duo eos et sadipscing. Erat duo et duo sadipscing dignissim et blandit invidunt aliquyam no blandit dolor elitr diam elitr sadipscing. Illum voluptua tempor aliquam nonumy ut nonumy minim vero kasd sea ea liber eos consequat. Ut est lorem sanctus. Lorem eros accusam et commodo placerat duo voluptua ut ut invidunt. At feugait dolores facilisi lorem stet. Aliquyam zzril sit est tation et vero ut lorem praesent sed. Et magna eum dolore molestie ipsum nisl et dolore tempor invidunt eos. Et takimata magna et wisi lorem ut gubergren velit lorem dolor dolor liber veniam consetetur elitr sanctus. Elitr sadipscing accusam rebum diam stet. Ut sadipscing kasd sea amet elitr dolor vero ea esse ea clita consequat.\n\nLaoreet at labore dolore sadipscing stet sed blandit nostrud stet id et consetetur. Justo sea aliquyam duo sanctus rebum kasd vero ipsum diam sanctus eos. Facer voluptua erat lorem volutpat kasd. Tempor dolor erat consetetur justo ea et et sed sed eirmod assum ipsum duis sit eum labore vel nulla. Accusam et est dolor voluptua assum amet. Quod elit rebum vero clita et sadipscing et quis clita volutpat sed no clita. At invidunt ipsum accusam invidunt vel no amet lorem est stet lobortis et voluptua justo duo.',
          Date: '2022-09-20T06:00:00.000Z',
          createdAt: '2022-09-17T19:04:56.605Z',
          updatedAt: '2022-09-23T17:44:44.472Z',
          publishedAt: '2022-09-17T19:09:46.357Z',
          Coordinates: [50.47492599854212, 17.96612780168333]
        }
      },
      {
        id: 2,
        attributes: {
          Title: 'Test event 2',
          Description:
            'Vel euismod dolor lorem diam. Sit aliquam eirmod dolore kasd consetetur eros invidunt tempor et invidunt duis dolore amet ut. Dolor rebum duis consequat. Diam voluptua erat duo eos et sadipscing. Erat duo et duo sadipscing dignissim et blandit invidunt aliquyam no blandit dolor elitr diam elitr sadipscing. Illum voluptua tempor aliquam nonumy ut nonumy minim vero kasd sea ea liber eos consequat. Ut est lorem sanctus. Lorem eros accusam et commodo placerat duo voluptua ut ut invidunt. At feugait dolores facilisi lorem stet. Aliquyam zzril sit est tation et vero ut lorem praesent sed. Et magna eum dolore molestie ipsum nisl et dolore tempor invidunt eos. Et takimata magna et wisi lorem ut gubergren velit lorem dolor dolor liber veniam consetetur elitr sanctus. Elitr sadipscing accusam rebum diam stet. Ut sadipscing kasd sea amet elitr dolor vero ea esse ea clita consequat.\n\nLaoreet at labore dolore sadipscing stet sed blandit nostrud stet id et consetetur. Justo sea aliquyam duo sanctus rebum kasd vero ipsum diam sanctus eos. Facer voluptua erat lorem volutpat kasd. Tempor dolor erat consetetur justo ea et et sed sed eirmod assum ipsum duis sit eum labore vel nulla. Accusam et est dolor voluptua assum amet. Quod elit rebum vero clita et sadipscing et quis clita volutpat sed no clita. At invidunt ipsum accusam invidunt vel no amet lorem est stet lobortis et voluptua justo duo.',
          Date: '2022-09-20T06:00:00.000Z',
          createdAt: '2022-09-17T19:04:56.605Z',
          updatedAt: '2022-09-23T17:44:44.472Z',
          publishedAt: '2022-09-17T19:09:46.357Z',
          Coordinates: [50.47492599854212, 17.96612780168333]
        }
      },
      {
        id: 3,
        attributes: {
          Title: 'Test event 3',
          Description:
            'Vel euismod dolor lorem diam. Sit aliquam eirmod dolore kasd consetetur eros invidunt tempor et invidunt duis dolore amet ut. Dolor rebum duis consequat. Diam voluptua erat duo eos et sadipscing. Erat duo et duo sadipscing dignissim et blandit invidunt aliquyam no blandit dolor elitr diam elitr sadipscing. Illum voluptua tempor aliquam nonumy ut nonumy minim vero kasd sea ea liber eos consequat. Ut est lorem sanctus. Lorem eros accusam et commodo placerat duo voluptua ut ut invidunt. At feugait dolores facilisi lorem stet. Aliquyam zzril sit est tation et vero ut lorem praesent sed. Et magna eum dolore molestie ipsum nisl et dolore tempor invidunt eos. Et takimata magna et wisi lorem ut gubergren velit lorem dolor dolor liber veniam consetetur elitr sanctus. Elitr sadipscing accusam rebum diam stet. Ut sadipscing kasd sea amet elitr dolor vero ea esse ea clita consequat.\n\nLaoreet at labore dolore sadipscing stet sed blandit nostrud stet id et consetetur. Justo sea aliquyam duo sanctus rebum kasd vero ipsum diam sanctus eos. Facer voluptua erat lorem volutpat kasd. Tempor dolor erat consetetur justo ea et et sed sed eirmod assum ipsum duis sit eum labore vel nulla. Accusam et est dolor voluptua assum amet. Quod elit rebum vero clita et sadipscing et quis clita volutpat sed no clita. At invidunt ipsum accusam invidunt vel no amet lorem est stet lobortis et voluptua justo duo.',
          Date: '2022-09-20T06:00:00.000Z',
          createdAt: '2022-09-17T19:04:56.605Z',
          updatedAt: '2022-09-23T17:44:44.472Z',
          publishedAt: '2022-09-17T19:09:46.357Z',
          Coordinates: [2486678.910243912, 6833705.880793706]
        }
      },
      {
        id: 4,
        attributes: {
          Title: 'Test event 4',
          Description:
            'Vel euismod dolor lorem diam. Sit aliquam eirmod dolore kasd consetetur eros invidunt tempor et invidunt duis dolore amet ut. Dolor rebum duis consequat. Diam voluptua erat duo eos et sadipscing. Erat duo et duo sadipscing dignissim et blandit invidunt aliquyam no blandit dolor elitr diam elitr sadipscing. Illum voluptua tempor aliquam nonumy ut nonumy minim vero kasd sea ea liber eos consequat. Ut est lorem sanctus. Lorem eros accusam et commodo placerat duo voluptua ut ut invidunt. At feugait dolores facilisi lorem stet. Aliquyam zzril sit est tation et vero ut lorem praesent sed. Et magna eum dolore molestie ipsum nisl et dolore tempor invidunt eos. Et takimata magna et wisi lorem ut gubergren velit lorem dolor dolor liber veniam consetetur elitr sanctus. Elitr sadipscing accusam rebum diam stet. Ut sadipscing kasd sea amet elitr dolor vero ea esse ea clita consequat.\n\nLaoreet at labore dolore sadipscing stet sed blandit nostrud stet id et consetetur. Justo sea aliquyam duo sanctus rebum kasd vero ipsum diam sanctus eos. Facer voluptua erat lorem volutpat kasd. Tempor dolor erat consetetur justo ea et et sed sed eirmod assum ipsum duis sit eum labore vel nulla. Accusam et est dolor voluptua assum amet. Quod elit rebum vero clita et sadipscing et quis clita volutpat sed no clita. At invidunt ipsum accusam invidunt vel no amet lorem est stet lobortis et voluptua justo duo.',
          Date: '2022-09-20T06:00:00.000Z',
          createdAt: '2022-09-17T19:04:56.605Z',
          updatedAt: '2022-09-23T17:44:44.472Z',
          publishedAt: '2022-09-17T19:09:46.357Z',
          Coordinates: [1827552.843828612, 7170402.312988535]
        }
      },
      {
        id: 5,
        attributes: {
          Title: 'Test event 5',
          Description:
            'Vel euismod dolor lorem diam. Sit aliquam eirmod dolore kasd consetetur eros invidunt tempor et invidunt duis dolore amet ut. Dolor rebum duis consequat. Diam voluptua erat duo eos et sadipscing. Erat duo et duo sadipscing dignissim et blandit invidunt aliquyam no blandit dolor elitr diam elitr sadipscing. Illum voluptua tempor aliquam nonumy ut nonumy minim vero kasd sea ea liber eos consequat. Ut est lorem sanctus. Lorem eros accusam et commodo placerat duo voluptua ut ut invidunt. At feugait dolores facilisi lorem stet. Aliquyam zzril sit est tation et vero ut lorem praesent sed. Et magna eum dolore molestie ipsum nisl et dolore tempor invidunt eos. Et takimata magna et wisi lorem ut gubergren velit lorem dolor dolor liber veniam consetetur elitr sanctus. Elitr sadipscing accusam rebum diam stet. Ut sadipscing kasd sea amet elitr dolor vero ea esse ea clita consequat.\n\nLaoreet at labore dolore sadipscing stet sed blandit nostrud stet id et consetetur. Justo sea aliquyam duo sanctus rebum kasd vero ipsum diam sanctus eos. Facer voluptua erat lorem volutpat kasd. Tempor dolor erat consetetur justo ea et et sed sed eirmod assum ipsum duis sit eum labore vel nulla. Accusam et est dolor voluptua assum amet. Quod elit rebum vero clita et sadipscing et quis clita volutpat sed no clita. At invidunt ipsum accusam invidunt vel no amet lorem est stet lobortis et voluptua justo duo.',
          Date: '2022-09-20T06:00:00.000Z',
          createdAt: '2022-09-17T19:04:56.605Z',
          updatedAt: '2022-09-23T17:44:44.472Z',
          publishedAt: '2022-09-17T19:09:46.357Z',
          Coordinates: [2478118.831459298, 6622557.27077322]
        }
      }
    ],
    meta: {
      pagination: {
        page: 1,
        pageSize: 25,
        pageCount: 1,
        total: 1
      }
    }
  }

  constructor(private httpClient: HttpClient) {}

  public getEvents(): Observable<Event[]> {
    return of(this.mockEvents.data)
  }

  public getEvent(id: number): Observable<Event | undefined> {
    return of(this.mockEvents.data).pipe(
      map(events => events.find(event => event.id === id))
    )
  }

  public createEvent(eventAttrs: EventAttributes): void {
    this.mockEvents.data.push({
      id: this.mockEvents.data.length + 1,
      attributes: {
        ...eventAttrs,
        createdAt: Date(),
        updatedAt: Date(),
        publishedAt: Date()
      }
    })

    console.log(this.mockEvents)
  }
}
