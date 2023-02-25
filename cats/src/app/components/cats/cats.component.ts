import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { loadCats } from 'src/app/state/cats/cats.actions';
import { selectAllBreeds, selectAllCats, selectError, selectStatus } from 'src/app/state/cats/cats.selectors';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {
  allBreeds$ = this.store.select(selectAllBreeds);
  allCats$ = this.store.select(selectAllCats);
  status$ = this.store.select(selectStatus);
  error$ = this.store.select(selectError);
  catsForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.catsForm = this.fb.group({
      limit: ['10', Validators.required],
      breed: this.fb.array(
        [
          this.fb.group({
            id: ['', Validators.required],
            name: ['', Validators.required],
          }),
        ],
        Validators.required,
      ),
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadCats({ limit: '10', breed: '' }));
  }

  onSubmit() {
    this.store.dispatch(
      loadCats({ limit: this.limit.value, breed: this.breed.value[0].id }),
    );
  }

  checkStatus(status: ReturnType<typeof selectStatus>) {
    return this.status$.pipe(map((value) => value === status));
  }

  get limit() {
    return <FormControl>this.catsForm.get('limit');
  }

  get breed() {
    return <FormArray>this.catsForm.get('breed');
  }
}
