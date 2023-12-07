import { Component, EventEmitter, Input, Output } from '@angular/core';
import { disabledBtn, goldHoveringBtn } from 'src/app/constants/buttons';
import { EmptyPagination, Pagination } from 'src/app/model/pagination';

@Component({
  selector: 'custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss']
})
export class CustomPaginatorComponent {
  @Input() pagination: Pagination<any> = new EmptyPagination();
  @Output() changePageEmitter: EventEmitter<number> = new EventEmitter<number>();
  goldHoveringBtn = goldHoveringBtn;
  disabledBtn = disabledBtn;

  isActivePage(pageNumber: number | string): boolean {
    if (typeof pageNumber === 'string') {
      return false
    }

    return (this.pagination.currentPage + 1) === pageNumber;
  }

  changePage(pageNumber: number | string) {
    if (typeof pageNumber === 'string') {
      return
    }

    const NEW_PAGE = pageNumber - 1;
    this.changePageEmitter.emit(NEW_PAGE);
  }

  getPageArray(): (number | string)[] {
    const TP: number = this.pagination.totalPages;  //Total Pages
    const CP: number = this.pagination.currentPage + 1; //Current Page

    if (TP <= 7) {
      return Array.from({ length: TP }, (_, index) => index + 1);
    } else {
      if ([1, 2, 3].includes(CP)) {
        return [1, 2, 3, 4, 5, '...', TP]
      } else if ([TP, TP - 1, TP - 2].includes(CP)) {
        return [1, '...', TP - 4, TP - 3, TP - 2, TP - 1, TP]
      } else {
        return [1, '...', CP - 1, CP, CP + 1, '...', TP]
      }
    }
  }

  isNaN(value: any): boolean {
    return isNaN(value)
  }
}
