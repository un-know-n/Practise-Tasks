import { Pipe, PipeTransform } from '@angular/core';

import { TTime } from '../@types/Time';

/**
 * Take parts from the time string of 'HH:MM:SS' format
 */
@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: TTime, timePart: 'h' | 'm' | 's'): string {
    switch (timePart) {
      case 'h':
        return value.slice(0, 2);
      case 'm':
        return value.slice(3, 5);
      case 's':
        return value.slice(6, 8);
    }
  }
}
