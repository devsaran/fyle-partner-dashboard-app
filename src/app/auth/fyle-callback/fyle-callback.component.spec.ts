import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FyleCallbackComponent } from './fyle-callback.component';

describe('FyleCallbackComponent', () => {
  let component: FyleCallbackComponent;
  let fixture: ComponentFixture<FyleCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FyleCallbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FyleCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
