import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersModule } from '../customers.module';
import { RepDialogComponent } from './rep-dialog.component';

describe('RepDialogComponent', () => {
  let component: RepDialogComponent;
  let fixture: ComponentFixture<RepDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersModule],
      declarations: [RepDialogComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
