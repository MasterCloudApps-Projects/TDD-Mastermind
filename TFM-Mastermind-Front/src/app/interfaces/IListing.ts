import { Observable } from "rxjs";

export interface IListing<T> {
    get_page(pageNumber: number, orderElement: string, pageSize: number, order: string, filter: any): Observable<T[]>;
    get_total(filter: any): Observable<number>;
}