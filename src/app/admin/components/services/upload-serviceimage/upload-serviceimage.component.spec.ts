import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadServiceimageComponent } from './upload-serviceimage.component';

describe('UploadServiceimageComponent', () => {
  let component: UploadServiceimageComponent;
  let fixture: ComponentFixture<UploadServiceimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadServiceimageComponent]
    });
    fixture = TestBed.createComponent(UploadServiceimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
