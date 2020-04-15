import { Directive, ElementRef } from '@angular/core';
import { Input, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {
  @Input() public spiedTags = [];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter', ['$event'])
    onScroll(event: any) {

        let currentSection: string;
        const children = this.elementRef.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        for (const element of children) {
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(event);
            // this.sectionChange.emit(this.currentSection);
        }
    }

}

