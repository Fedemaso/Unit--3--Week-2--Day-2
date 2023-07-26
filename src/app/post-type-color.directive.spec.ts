import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PostTypeColorDirective } from './post-type-color.directive';

// Componente fittizio per testare la direttiva
@Component({
  template: `<div [appPostTypeColor]="'politic'">Test</div>`
})
class TestComponent {}

describe('PostTypeColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, PostTypeColorDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should apply correct color class for "news" type', () => {
    const divElement = fixture.debugElement.query(By.css('div')).nativeElement;
    expect(divElement.classList.contains('news-color')).toBeTruthy();
  });
});
