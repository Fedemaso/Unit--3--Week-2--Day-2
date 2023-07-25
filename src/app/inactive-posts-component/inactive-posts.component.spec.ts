import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivePostsComponentComponent } from './inactive-posts.component';

describe('InactivePostsComponentComponent', () => {
  let component: InactivePostsComponentComponent;
  let fixture: ComponentFixture<InactivePostsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InactivePostsComponentComponent]
    });
    fixture = TestBed.createComponent(InactivePostsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
