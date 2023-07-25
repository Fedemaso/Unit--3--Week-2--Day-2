import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePostsComponent } from './active-posts.component';

describe('ActivePostsComponentComponent', () => {
  let component: ActivePostsComponent;
  let fixture: ComponentFixture<ActivePostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivePostsComponent]
    });
    fixture = TestBed.createComponent(ActivePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
