import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { MessagesModule } from '../messages.module';
import { MessageNewComponent } from './message-new.component';

describe('MessageNewComponent', () => {
  let component: MessageNewComponent;
  let fixture: ComponentFixture<MessageNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, MessagesModule],
      declarations: [MessageNewComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
