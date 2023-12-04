export interface Pagination<T> {
    content: T[];
    currentPage: number;
    totalItems: number;
    totalPages: number;
    itemPerPage: number;
}

export class EmptyPagination<T> implements Pagination<T>{
    content: T[] = [];
    currentPage: number = 0;
    totalItems: number = 0;
    totalPages: number = 0;
    itemPerPage: number = 10;
}

export class NewPagination<T> extends EmptyPagination<T>{
    constructor(page: number, content: T[], itemPerPage: number = 10) {
        super();

        const ITEMS_PER_PAGE: number = itemPerPage;
        const START_ELEM: number = page * ITEMS_PER_PAGE;         // Ex. (Page = 0)*10 = 0      or    (Page = 1)*10 = 10
        const END_ELEM: number = START_ELEM + ITEMS_PER_PAGE;     // Ex.          0+10 = 10     or            10+10 = 20

        this.content = content.slice(START_ELEM, END_ELEM || content.length);
        this.currentPage = page;
        this.totalItems = content.length;
        this.totalPages = Math.round(content.length / ITEMS_PER_PAGE);
        this.itemPerPage = ITEMS_PER_PAGE
    }
}