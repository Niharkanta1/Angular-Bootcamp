import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecompComponent } from './typecomp.component';

describe('TypecompComponent', () => {
  let component: TypecompComponent;
  let fixture: ComponentFixture<TypecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
