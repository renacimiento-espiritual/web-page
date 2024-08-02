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
  goToWhatsapp(): void {
    window.open("https://wa.me/15846005120?text=Hola%20📞,%20estoy%20interesado%20en%20contactar%20con%20Renacimiento%20Espiritual%20para%20una%20consulta.%20🧘","_blank")
  }
}
