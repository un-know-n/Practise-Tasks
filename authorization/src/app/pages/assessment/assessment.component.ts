import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { defaultColorScheme } from 'src/app/shared/constants/assessment';
import { IBarFormat, IDashboardItem } from 'src/app/shared/models/data.model';
import { transformAssessmentObject } from 'src/app/shared/utils/transformAssessmentObject';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
})
export class AssessmentComponent implements OnInit {
  public assessmentData!: IBarFormat[];
  public assessmentElement!: IDashboardItem;
  public colorScheme = defaultColorScheme;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.assessmentData = transformAssessmentObject(
      this.activatedRoute.snapshot.data['assessment'],
    );
    this.activatedRoute.paramMap
      .pipe(take(1))
      .subscribe(() => (this.assessmentElement = window.history.state['data']));
  }
}
