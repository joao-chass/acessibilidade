import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FocusDirective } from "./focus-trap.directive";

@NgModule({
  declarations: [FocusDirective],
  imports: [CommonModule],
  exports: [FocusDirective]
})

export class FocusTrapModule {}
