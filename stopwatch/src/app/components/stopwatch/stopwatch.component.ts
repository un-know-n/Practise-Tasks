import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { BehaviorSubject, buffer, debounceTime, filter, fromEvent, interval, Subject, takeUntil, tap } from 'rxjs';

/**
 * Responsible for drawing timer component
 */
@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent implements OnDestroy {
  /**
   * Reference for the wait button in the markup
   */
  @ViewChild('pauseButton', { static: false, read: ElementRef })
  waitButton!: ElementRef;

  /** Main streams of the timer */
  timerSource$ = new BehaviorSubject({
    timerSeconds: 0,
    isRunning: false,
  });
  private timerStop$ = new Subject();

  ngAfterViewInit(): void {
    // Generate the stream when waitButton is clicked
    const waitButtonClick$ = fromEvent(this.waitButton.nativeElement, 'click');

    // Check if the second click happened in less than 300ms.
    waitButtonClick$
      .pipe(
        buffer(waitButtonClick$.pipe(debounceTime(300))),
        filter((clicks) => clicks.length === 2),
      )
      .subscribe(() => {
        this.timerSource$.next({ ...this.timerSource$.value, isRunning: false });
        this.timerStop$.next(0);
      });
  }

  ngOnDestroy(): void {
    this.timerStop$.next(0);
    this.timerStop$.complete();
  }

  onToggleTimer(pausePoint: number): void {
    if (this.timerSource$.value.isRunning) {
      this.onStopTimer();
    } else {
      this.onStartTimer(pausePoint);
    }
  }

  onStopTimer(): void {
    this.timerSource$.next({ ...this.timerSource$.value, isRunning: false, timerSeconds: 0 });
    this.timerStop$.next(0);
  }

  onStartTimer(pausePoint: number): void {
    this.timerSource$.next({ ...this.timerSource$.value, isRunning: true });
    interval(1000)
      .pipe(
        takeUntil(this.timerStop$),
        tap((value) => this.timerSource$.next({ ...this.timerSource$.value, timerSeconds: value + pausePoint })),
      )
      .subscribe();
  }

  /** Restart timer without stopping it */
  onRestartTimer(): void {
    this.timerSource$.next({ ...this.timerSource$.value, timerSeconds: 0 });
    this.timerStop$.next(0);
    this.onStartTimer(0);
  }
}
