import { Component, OnInit } from '@angular/core';
import { fromEvent, map, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.scss'
})
export class DrawComponent implements OnInit {
  canvas$: any;

  ngOnInit(): void {
    this.canvas$ = document.querySelector('canvas') as HTMLCanvasElement;

    const mouseDown$ = fromEvent(this.canvas$, 'mousedown');
    const mouseUp$ = fromEvent(document, 'mouseup');
    const mouseMove$ = fromEvent(this.canvas$, 'mousemove');

    mouseDown$
      .pipe(
        switchMap(() => {
          return mouseMove$.pipe(
            map((e: any) => ({
              x: e.offsetX,
              y: e.offsetY,
              ctx: e.target.getContext('2d')
            })),
            takeUntil(mouseUp$)
          );
        })
      )
      .subscribe(pos => {
        pos.ctx.fillRect(pos.x, pos.y, 2, 2);
      });
  }

  onClear() {
    this.canvas$.getContext('2d').clearRect(0, 0, this.canvas$.width, this.canvas$.height);
  }

}
