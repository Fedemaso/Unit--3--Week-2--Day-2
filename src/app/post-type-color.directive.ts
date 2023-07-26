import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPostTypeColor]'
})
export class PostTypeColorDirective {
  @Input('appPostTypeColor')
  postType!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const classToAdd = this.getClassByPostType(this.postType);
    this.renderer.addClass(this.elementRef.nativeElement, classToAdd);
  }

  private getClassByPostType(type: string): string {
    switch (type) {
      case 'news':
        return 'news-color';
      case 'politic':
        return 'politic-color';
      case 'education':
        return 'education-color';
      default:
        return '';
    }
  }
}
