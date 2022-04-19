import { CommonModule } from '@angular/common';
import { FocusDirective } from './../focus-trap/focus-trap.directive';
import { NgModule } from "@angular/core";
import { FocusBackDirective } from './focus-back.directive';

@NgModule({
  declarations: [FocusBackDirective],
  imports: [CommonModule],
  exports: [FocusBackDirective]
})
export class FocusBackModule {}
