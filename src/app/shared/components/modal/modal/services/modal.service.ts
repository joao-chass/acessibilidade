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
import { ModalRef } from '../models/modal-ref';

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
    const modalRef =  new ModalRef(componetRef);
    componetRef.instance.modalRef = modalRef;
    return modalRef;
  }

  private createcomponentRef(): ComponentRef<ModalComponent> {
    return this.componeteFactoyy.create(this.injector);
  }
}


