import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, fromEvent, map, switchMap, takeUntil } from 'rxjs';
import { MousePosition } from '../../shared/models/draw.model';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.scss'
})
export class DrawComponent implements AfterViewInit {
  @ViewChild('myCanvas') canvasRef: ElementRef<HTMLCanvasElement> | null = null;
  readonly presetColors: string[] = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#a52a2a', '#008000', '#800080'];

  ngAfterViewInit(): void {
    if (this.canvasRef) {
      this.initDrawnCanvas();
    }
  }

  onColorChange(color: string): void {
    const ctx = this.getCanvasContext();
    if (ctx) {
      ctx.fillStyle = color;
    }
  }

  onClear(): void {
    const ctx = this.getCanvasContext();
    if (ctx) {
      const canvas = this.canvasRef!.nativeElement;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  private getCanvasContext(): CanvasRenderingContext2D | null {
    if (!this.canvasRef) return null;
    const canvas = this.canvasRef.nativeElement;
    return canvas.getContext('2d');
  }

  private initDrawnCanvas(): void {
    if (!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    const mouseDown$: Observable<MouseEvent> = fromEvent<MouseEvent>(canvas, 'mousedown');
    const mouseUp$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'mouseup');
    const mouseMove$: Observable<MouseEvent> = fromEvent<MouseEvent>(canvas, 'mousemove');

    mouseDown$
      .pipe(
        switchMap(() => {
          return mouseMove$.pipe(
            map((e: MouseEvent) => this.calculateMousePosition(e, canvas)),
            takeUntil(mouseUp$)
          );
        })
      )
      .subscribe((pos: MousePosition) => {
        this.draw(pos);
      });
  }

  private calculateMousePosition(event: MouseEvent, canvas: HTMLCanvasElement): MousePosition {
    return {
      x: event.offsetX,
      y: event.offsetY,
      ctx: canvas.getContext('2d') as CanvasRenderingContext2D,
    };
  }

  private draw(pos: MousePosition): void {
    pos.ctx.fillRect(pos.x, pos.y, 2, 2);
  }
}
