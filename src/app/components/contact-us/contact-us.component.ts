import { Component } from '@angular/core';
import { ButtonComponent } from '../../core/components/button/button.component';
import { TitleComponent } from '../../core/components/title/title.component';

@Component({
  selector: 're-contact-us',
  standalone: true,
  imports: [
    ButtonComponent,
    TitleComponent
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
