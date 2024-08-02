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
  goToWhatsapp(): void {
    window.open("https://wa.me/15846005120?text=Hola%20😊,%20estoy%20interesado%20en%20saber%20m%C3%A1s%20sobre%20los%20servicios%20espirituales%20de%20Renacimiento%20Espiritual.%20🙏", '_blank')
  }
}
