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

  it('should set color on color change', () => {
    const color = '#ff0000';
    const ctxSpy = jasmine.createSpyObj('CanvasRenderingContext2D', ['fillStyle']);
    spyOn(component.canvasRef!.nativeElement, 'getContext').and.returnValue(ctxSpy);
    component.onColorChange(color);
    expect(ctxSpy.fillStyle).toEqual(color);
  });

  it('should clear canvas on clear', () => {
    const ctxSpy = jasmine.createSpyObj('CanvasRenderingContext2D', ['clearRect']);
    spyOn(component.canvasRef!.nativeElement, 'getContext').and.returnValue(ctxSpy);
    component.onClear();
    const canvas = component.canvasRef!.nativeElement;
    expect(ctxSpy.clearRect).toHaveBeenCalledWith(0, 0, canvas.width, canvas.height);
  });
});
