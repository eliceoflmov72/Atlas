import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-publish',
  imports: [],
  templateUrl: './publish.component.html',
  styleUrl: './publish.component.scss'
})
export class PublishComponent {
  @Output() closeModalEvent = new EventEmitter();
  closeModal() {
    this.closeModalEvent.emit()
  }
  sendPost() {
    this.closeModal()
    /* ! ENVIAR A SERVICE */
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('[modal-content]')) {
      this.closeModal();
    }
  }
}
