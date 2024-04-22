import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, map, switchMap, takeUntil } from 'rxjs';
import { MousePosition } from '../../shared/models/draw.model';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.scss'
})
export class DrawComponent implements OnInit {
  readonly presetColors: string[] = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#a52a2a', '#008000', '#800080'];
  private canvas: HTMLCanvasElement | null = null;
  private context: CanvasRenderingContext2D | null = null;

  ngOnInit(): void {
    this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    this.context = this.canvas?.getContext('2d');

    if (this.canvas && this.context) {
      this.initDrawnCanvas(this.canvas, this.context);
    };
  }

  onColorChange(color: string): void {
    if (this.context) {
      this.context.fillStyle = color;
    }
  }

  onClear(): void {
    if (this.context) {
      this.context.clearRect(0, 0, this.canvas?.width as number, this.canvas?.height as number);
    }
  }

  private initDrawnCanvas(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
    const mouseDown$: Observable<MouseEvent> = fromEvent<MouseEvent>(canvas, 'mousedown');
    const mouseUp$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'mouseup');
    const mouseMove$: Observable<MouseEvent> = fromEvent<MouseEvent>(canvas, 'mousemove');

    mouseDown$
      .pipe(
        switchMap(() => {
          return mouseMove$.pipe(
            map((e: MouseEvent) => ({
              x: e.offsetX,
              y: e.offsetY,
              ctx: context,
            })),
            takeUntil(mouseUp$)
          );
        })
      )
      .subscribe((pos: MousePosition) => this.draw(pos));
  }

  private draw(pos: MousePosition): void {
    pos.ctx.fillRect(pos.x, pos.y, 2, 2);
  }
}
