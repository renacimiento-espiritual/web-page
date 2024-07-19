import { Component } from '@angular/core';
import { TitleComponent } from '../../core/components/title/title.component';

@Component({
  selector: 're-about-us',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
