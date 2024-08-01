import { Component } from '@angular/core';
import { BENEFITS } from '../../core/const/benefits.const';
import { CommonModule } from '@angular/common';

@Component({
  selector: 're-benefits',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  benefits = BENEFITS;
}
