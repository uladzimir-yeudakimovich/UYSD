import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { OrdersModule } from '../orders.module';
import { OrderNewComponent } from './order-new.component';

describe('OrderNewComponent', () => {
  let component: OrderNewComponent;
  let fixture: ComponentFixture<OrderNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, OrdersModule],
      declarations: [OrderNewComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
