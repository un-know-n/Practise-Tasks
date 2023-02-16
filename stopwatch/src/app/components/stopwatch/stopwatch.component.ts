import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { buffer, debounceTime, filter, fromEvent, interval, Subject, takeUntil, tap } from 'rxjs';

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

  /** Timer initial values */
  timerSeconds = 0;
  isRunning = false;

  /** Main streams of the timer */
  private timerSource$ = interval(1000);
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
        this.isRunning = false;
        this.timerStop$.next(0);
      });
  }

  ngOnDestroy(): void {
    this.timerStop$.next(0);
    this.timerStop$.complete();
  }

  onToggleTimer(pausePoint: number): void {
    if (this.isRunning) {
      this.onStopTimer();
    } else {
      this.onStartTimer(pausePoint);
    }
  }

  onStopTimer(): void {
    this.isRunning = false;
    this.timerStop$.next(0);
    this.timerSeconds = 0;
  }

  onStartTimer(pausePoint: number): void {
    this.isRunning = true;
    this.timerSource$
      .pipe(
        takeUntil(this.timerStop$),
        tap((value) => (this.timerSeconds = value + pausePoint)),
      )
      .subscribe();
  }

  /** Restart timer without stopping it */
  onRestartTimer(): void {
    this.timerSeconds = 0;
    this.timerStop$.next(0);
    this.onStartTimer(this.timerSeconds);
  }
}
