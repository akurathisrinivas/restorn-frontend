import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNavComponent } from './test-nav.component';

describe('TestNavComponent', () => {
  let component: TestNavComponent;
  let fixture: ComponentFixture<TestNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestNavComponent]
    });
    fixture = TestBed.createComponent(TestNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
