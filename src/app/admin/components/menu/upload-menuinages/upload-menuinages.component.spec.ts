import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMenuinagesComponent } from './upload-menuinages.component';

describe('UploadMenuinagesComponent', () => {
  let component: UploadMenuinagesComponent;
  let fixture: ComponentFixture<UploadMenuinagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadMenuinagesComponent]
    });
    fixture = TestBed.createComponent(UploadMenuinagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
