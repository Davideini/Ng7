import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesSystemPageComponent } from './files-system-page.component';

describe('FilesSystemPageComponent', () => {
  let component: FilesSystemPageComponent;
  let fixture: ComponentFixture<FilesSystemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesSystemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesSystemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
