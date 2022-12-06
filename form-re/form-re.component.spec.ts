import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormREComponent } from './form-re.component';

describe('FormREComponent', () => {
  let component: FormREComponent;
  let fixture: ComponentFixture<FormREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormREComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
