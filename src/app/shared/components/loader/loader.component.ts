import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AppTexts } from '@core/models/enums/app-text';

@Component({
  selector: 'gml-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnChanges {
  appTexts = AppTexts;
  showLoading: boolean = false;
  @Input() isLoading: boolean | null = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoading']) {
      this.showLoading = changes['isLoading'].currentValue;
    }
  }
}
