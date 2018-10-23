import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScrollingItemComponent } from './test-scrolling-item.component';

describe('TestScrollingItemComponent', () => {
  let component: TestScrollingItemComponent;
  let fixture: ComponentFixture<TestScrollingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestScrollingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestScrollingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
