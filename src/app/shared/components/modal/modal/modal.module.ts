import { ModalService } from './services/modal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { FocusTrapModule } from 'src/app/shared/directives/focus-trap/focus-trap.module';
import { FocusBackModule } from 'src/app/shared/directives/focus-back/focus-back.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, FocusTrapModule, FocusBackModule],
  exports: [ModalComponent],
  providers: [ModalService],
})
export class ModalModule {}
