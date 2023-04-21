import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';

@Component({
  selector: '[appDialog]',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  get nativeElement() {
    return this.element.nativeElement;
  }

  constructor(private element: ElementRef) {}

  showModal() {
    this.nativeElement.showModal();
  }
  
  closeModal(): void {
    this.nativeElement.close();
  }
}
