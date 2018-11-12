import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWebLibComponent } from './test-web-lib.component';

describe('TestWebLibComponent', () => {
  let component: TestWebLibComponent;
  let fixture: ComponentFixture<TestWebLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWebLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWebLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
