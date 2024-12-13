import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UtilService } from '@shared/util/util.service';

@Component({
  selector: 'gml-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 20;
  @Input() totalPages: number = 1;
  @Input() totalResults: number = 0;
  @Output() pageNumberChange = new EventEmitter<number>();

  constructor( 
    private utilService: UtilService
  ) {}

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageNumberChange.emit(this.currentPage);
      this.utilService.scrollToTop();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageNumberChange.emit(this.currentPage);
      this.utilService.scrollToTop();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageNumberChange.emit(this.currentPage);
      this.utilService.scrollToTop();
    }
  }

  getPageRange(): number[] {
    const range: number[] = [];
    const maxPagesToShow = this.currentPage >= 100 ? 3 : 5; // Controlar el número de páginas a mostrar según el tamaño numérico de la página.
  
    let startPage = Math.max(this.currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, this.totalPages);
  
    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }
  
    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }
  
    return range;
  }
}
