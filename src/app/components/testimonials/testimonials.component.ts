import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../core/components/title/title.component';
import { TESTIMONIALS } from '../../core/const/testimonials.const';

@Component({
  selector: 're-testimonials',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
    testimonials = TESTIMONIALS;
    currentItem: number = 0;

    prev(): void {
      const index = this.currentItem - 1;
      this.currentItem = index < 0 ? this.testimonials.length - 1 : index;
    }

    next(): void {
      const index = this.currentItem + 1;
      this.currentItem = index >= this.testimonials.length ? 0 : index;
    }
}
