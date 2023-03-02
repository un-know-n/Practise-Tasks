import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Breed, Cat } from 'src/app/state/cats/cats.model';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  constructor(private http: HttpClient) {}

  getCats(limit = '10', breed: string): Observable<Cat[]> {
    return this.http
      .get<Cat[]>('https://api.thecatapi.com/v1/images/search', {
        params: {
          limit,
          ...(breed ? { breed_ids: breed } : null),
        },
      })
      .pipe(
        map((cats) =>
          cats.map((cat) => ({
            id: cat.id,
            url: cat.url,
            height: cat.height,
            width: cat.width,
          })),
        ),
      );
  }

  getBreeds(): Observable<Breed[]> {
    return this.http
      .get<Breed[]>('https://api.thecatapi.com/v1/breeds')
      .pipe(
        map((breeds) =>
          breeds.map((breed) => ({ id: breed.id, name: breed.name })),
        ),
      );
  }
}
