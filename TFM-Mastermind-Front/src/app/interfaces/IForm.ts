import { Observable } from "rxjs";

export interface IForm<T> {
    create(data: Partial<T>): Observable<T>;
    get(data: number): Observable<T>;
    edit(data: Partial<T>): Observable<T>;
    delete?(data: number): Observable<any>;
    list?(data: any): Observable<T[]>;
}