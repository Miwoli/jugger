import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { ModalState } from '../model/modalState'

@Injectable()
export class ModalService {
  private display: BehaviorSubject<ModalState> =
    new BehaviorSubject<ModalState>({
      isOpened: false
    })

  watch(): Observable<ModalState> {
    return this.display.asObservable()
  }

  constructor() {}

  open() {
    this.display.next({ isOpened: true })
  }

  close() {
    this.display.next({ isOpened: true })
  }
}
