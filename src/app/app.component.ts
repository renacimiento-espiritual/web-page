import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './core/components/title/title.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BannerComponent,
    AboutUsComponent,
    ServicesComponent,
    BenefitsComponent,
    TitleComponent,
    CommonModule,
    NavBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-page';
}
