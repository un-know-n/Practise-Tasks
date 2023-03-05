import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { IBarFormat } from 'src/app/shared/models/data.model';
import { transformAssessmentObject } from 'src/app/shared/utils/transformAssessmentObject';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
})
export class AssessmentComponent implements OnInit {
  public assessmentData!: IBarFormat[];
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
  }
}
