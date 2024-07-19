import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 're-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Output() trigger: EventEmitter<void> = new EventEmitter();

  @HostListener('click', ['$event']) 
  onClick(){
    this.trigger.emit();
  }
}
