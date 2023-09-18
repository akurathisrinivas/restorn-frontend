import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMenuimagesComponent } from './view-menuimages.component';

describe('ViewMenuimagesComponent', () => {
  let component: ViewMenuimagesComponent;
  let fixture: ComponentFixture<ViewMenuimagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMenuimagesComponent]
    });
    fixture = TestBed.createComponent(ViewMenuimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
