import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material/material.module'

@NgModule({
  declarations: [],
  providers: [],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule]
})
export class SharedModule {}
