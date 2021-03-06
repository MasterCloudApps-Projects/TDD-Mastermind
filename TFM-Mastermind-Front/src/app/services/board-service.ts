import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BusService } from "../common/bus";
import { IForm } from "../interfaces/IForm";
import { take } from 'rxjs/operators';
import { Board } from "../domain/Board";
import { Proposal } from "../domain/Proposal";
import { Result } from "../domain/Result";

const PREFIX = `${environment.baseUrl}/board`;

/**
 * Servicio para recuperar catálogos, tanto "locales" como desde el servidor
 * 
 **/
 @Injectable({
    providedIn: 'root'
})
export class BoardService implements IForm<Board>{
    constructor(
        private http: HttpClient
    ) {
    } 
     create(data: Partial<Board>): Observable<Board> {
         throw new Error("Method not implemented.");
     }
     get(data: number): Observable<Board> {
         throw new Error("Method not implemented.");
     }
     edit(data: Partial<Board>): Observable<Board> {
         throw new Error("Method not implemented.");
     }

    //Recupera todos los atributos de un cliente
    public getSecretcombination (): Observable<Board> {
        return this.http.get<Board>(`${PREFIX}/`).pipe(take(1));
    }

    //Recupera todos los atributos de un cliente
    public addProposalCombination (proposal: Proposal): Observable<Result> {
        return this.http.put<Result>(`${PREFIX}/`, proposal).pipe(take(1));
    }

    public getResults(): Observable<Result[]>{
		return this.http.get<Result[]>(`${PREFIX}/results`).pipe(take(1));
    } 

	public newGame(): Observable<Board> {
        return this.http.put<Board>(`${PREFIX}/newGame`,'').pipe(take(1));
	}
}