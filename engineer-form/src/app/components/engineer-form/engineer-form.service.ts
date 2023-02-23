import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of, take } from 'rxjs';

export const serverData = {
  angular: ['1.1.1', '1.2.1', '1.3.3'],
  react: ['2.1.2', '3.2.4', '4.3.1'],
  vue: ['3.3.1', '5.2.1', '5.1.3'],
};

export type TTechnology = typeof serverData;

@Injectable({
  providedIn: 'root',
})
export class EngineerFormService {
  technologyVersions$ = new BehaviorSubject<string[]>([]);

  getTechnologyVersion(technology: keyof TTechnology): void {
    of(serverData)
      .pipe(
        take(1),
        map((data: TTechnology) => data[technology]),
      )
      .subscribe((value) => this.technologyVersions$.next(value));
  }
}
