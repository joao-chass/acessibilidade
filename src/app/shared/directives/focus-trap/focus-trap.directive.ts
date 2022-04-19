import { AfterViewInit, Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[appFocusTrap]'
})

export class FocusDirective implements AfterViewInit {

  private firstFocusedElement: HTMLElement = null;
  private lastFocusedElement: HTMLElement = null;

  constructor(private elementRef: ElementRef<any>) {}
  ngAfterViewInit(): void {
    const focusableElements = this.elementRef
      .nativeElement
      .querySelectorAll(`
        [tabindex]:not([tabindex="-1"]),
        a[href]:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled])`
      ) as Array<HTMLElement>;


      this.firstFocusedElement = focusableElements[0];
      this.lastFocusedElement = focusableElements[focusableElements.length - 1];
      this.firstFocusedElement.focus();
  }

  @HostListener('keydown', ['$event'])
  public managerTab(event: KeyboardEvent): void {
    if(event.key !== 'Tab') {
      return ;
    }

    if (event.shiftKey && document.activeElement === this.firstFocusedElement) {
      this.lastFocusedElement.focus();
    } else if (document.activeElement === this.lastFocusedElement) {
      this.firstFocusedElement.focus();
      event.preventDefault();
    }
  }
}
