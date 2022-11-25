import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ModalState } from '../model/modalState'
import { ModalService } from './modal.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  $display: Observable<ModalState>

  constructor(private modalService: ModalService) {
    this.$display = this.modalService.watch()
  }

  close(): void {
    this.modalService.close()
  }
}
