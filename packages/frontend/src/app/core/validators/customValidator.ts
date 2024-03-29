import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'
import moment from 'moment'

export class CustomValidators {
  static match(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source)
      const targetCtrl = control.get(target)

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null
    }
  }
}
