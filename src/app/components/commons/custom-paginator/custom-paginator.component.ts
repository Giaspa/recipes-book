import { Component, Input } from '@angular/core';
import { disabledBtn, goldHoveringBtn } from 'src/app/constants/buttons';
import { EmptyPagination, Pagination } from 'src/app/model/pagination';

@Component({
  selector: 'custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss']
})
export class CustomPaginatorComponent {
  @Input() pagination: Pagination<any> = new EmptyPagination();
  goldHoveringBtn = goldHoveringBtn;
  disabledBtn = disabledBtn;

  isStart(): boolean {
    return this.pagination.currentPage === 0;
  }

  canGoBack(): boolean {
    return this.pagination.currentPage > 0;
  }
  
  canGoAhead(): boolean {
    return (this.pagination.currentPage + 1) < this.pagination.totalPages;
  }

  isEnd(): boolean {
    return (this.pagination.currentPage + 1) === this.pagination.totalPages;
  }
}
