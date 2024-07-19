import { Component } from '@angular/core';
import { ButtonComponent } from '../../core/components/button/button.component';

@Component({
  selector: 're-banner',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

}
