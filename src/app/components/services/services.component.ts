import { Component } from '@angular/core';
import { SERVICES } from '../../core/const/services.const';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../core/components/title/title.component';
import { ButtonComponent } from '../../core/components/button/button.component';

@Component({
  selector: 're-services',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    ButtonComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = SERVICES;

  goToWhatsapp(link: string): void {
    window.open(link, "_blank");
  }
}
