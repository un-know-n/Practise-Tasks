import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return dayjs(value).fromNow();
  }
}
