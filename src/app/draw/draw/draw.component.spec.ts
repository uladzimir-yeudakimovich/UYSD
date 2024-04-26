import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawModule } from '../draw.module';
import { DrawComponent } from './draw.component';

describe('DrawComponent', () => {
  let component: DrawComponent;
  let fixture: ComponentFixture<DrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawModule],
      declarations: [DrawComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have canvas initialized after view init', () => {
    fixture.detectChanges();
    expect(component.canvasRef).toBeDefined();
  });

  it('should have preset colors initialized', () => {
    fixture.detectChanges();
    expect(component.presetColors.length).toBeGreaterThan(0);
  });
});
