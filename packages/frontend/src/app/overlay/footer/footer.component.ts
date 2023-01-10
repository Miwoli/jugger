import { Component } from '@angular/core'
import moment from 'moment'

@Component({
  selector: 'jugger-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = moment().year()
}
