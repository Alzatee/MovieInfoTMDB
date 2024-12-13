import { Component, EventEmitter, Output } from '@angular/core';
import { AppTexts } from '@core/models/enums/app-text';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'gml-seeker',
  standalone: false,
  templateUrl: './seeker.component.html',
  styleUrl: './seeker.component.scss'
})
export class SeekerComponent {
  appTexts = AppTexts;
  @Output() searchText = new EventEmitter<string>();
  private searchSubject: Subject<string> = new Subject<string>();
  
  constructor() {
    // Configuración debounce para emitir el valor después de 500ms de inactividad
    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe((text) => {
      this.searchText.emit(text);
    });
  }

  onSearchMovie(text: string): void {
    text = text.trim();
    if (text.length === 0) {
      this.searchSubject.next('');
    }

    this.searchSubject.next(text);
  }

}
