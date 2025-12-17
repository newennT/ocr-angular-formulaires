import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-skill-assessment',
  imports: [FormsModule],
  templateUrl: './skill-assessment.component.html',
  styleUrls: ['./skill-assessment.component.scss']
})
export class SkillAssessmentComponent {
  skillLevel: string = '';

  onSubmitForm(form: NgForm): void {
    console.log(form.value);
  }
}
