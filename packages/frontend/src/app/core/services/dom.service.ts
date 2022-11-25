import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector
} from '@angular/core'

@Injectable()
export class DomService {
  private compnentRef!: ComponentRef<unknown>

  constructor(private appRef: ApplicationRef, private injector: Injector) {}

  public appendComponentTo(
    parentId: string,
    child: Component,
    childConfig?: childConfig
  ) {}
}

interface ChildConfig {
  inputs: object
  outputs: object
}
