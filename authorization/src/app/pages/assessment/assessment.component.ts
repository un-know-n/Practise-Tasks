import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_core/state/app.state';
import { DataActions } from 'src/app/_core/state/data/data.actions';
import { selectFormattedAssessment } from 'src/app/_core/state/data/data.selectors';
import { defaultColorScheme } from 'src/app/shared/constants/assessment';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
})
export class AssessmentComponent implements OnInit {
  public assessmentData$ = this.store.select(selectFormattedAssessment);
  public colorScheme = defaultColorScheme;

  constructor(private store: Store<AppState>, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(
      DataActions.loadAssessment({ id: this.router.snapshot.params['id'] }),
    );
  }
}
