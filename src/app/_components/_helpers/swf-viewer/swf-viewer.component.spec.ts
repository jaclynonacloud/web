import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwfViewerComponent } from './swf-viewer.component';

describe('SwfViewerComponent', () => {
  let component: SwfViewerComponent;
  let fixture: ComponentFixture<SwfViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwfViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
