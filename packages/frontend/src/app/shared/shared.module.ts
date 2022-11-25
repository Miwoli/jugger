import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconButtonComponent } from './icon-button/icon-button.component'
import { ModalService } from './modal/modal.service';
import { ModalComponent } from './modal/modal.component'

@NgModule({
  declarations: [IconButtonComponent, ModalComponent],
  providers: [ModalService],
  imports: [CommonModule],
  exports: [IconButtonComponent]
})
export class SharedModule {}
