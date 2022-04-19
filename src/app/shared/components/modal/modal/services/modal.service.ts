import { ModalComponent } from './../modal.component';
import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';
import { BodyInjectotService } from '../../services/body-injector';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private componeteFactoyy: ComponentFactory<ModalComponent>;
  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectotService
  ) {
    this.componeteFactoyy =
      componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    const componetRef = this.createcomponentRef();
    componetRef.instance.config = config;
    componetRef.instance.config.templateRef;
    console.log(componetRef.instance);
    this.bodyInjector.stackBeforeAppRoot(componetRef);
    return new ModalRef(componetRef);
  }

  private createcomponentRef(): ComponentRef<ModalComponent> {
    return this.componeteFactoyy.create(this.injector);
  }
}

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  public close(): void {
    console.log('close called');
    this.componentRef.destroy();
  }
}
