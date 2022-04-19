import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class BodyInjectotService {

  constructor(private appRef: ApplicationRef) {}

  public stackBeforeAppRoot(componentRef: ComponentRef<any>): void {
    const domElemnt = this.createDomElement(componentRef);
    const appRoot = document.body.querySelector('app-root');
    document.body.insertBefore(domElemnt, appRoot);
  }

  public createDomElement(componentRef: ComponentRef<any>): HTMLElement {
    this.appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    return domElement;
  }

}
