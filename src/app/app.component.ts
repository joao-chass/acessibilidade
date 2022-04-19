import { ModalService, ModalRef } from './shared/components/modal/modal/services/modal.service';
import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName = 'Falavio'
  public modalRef: ModalRef;

  constructor(private modalServices: ModalService) {}

  public show() {
    this.modalRef = this.modalServices.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }
}
