import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { take } from 'rxjs';
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
  public colorScheme: Color = {
    name: 'AssessmentScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.assessmentData = transformAssessmentObject(
      this.activatedRoute.snapshot.data['assessment'],
    );
    this.activatedRoute.paramMap.pipe(
      // map(() => (this.assessmentElement = window.history.state['data'])),
      take(1)
    ).subscribe(() => this.assessmentElement = window.history.state['data']);
  }
}
