import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BusService } from "../common/bus";
import { IForm } from "../interfaces/IForm";
import { take } from 'rxjs/operators';
import { Board } from "../domain/Board";
import { Proposal } from "../domain/proposal";

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
    public addProposalCombination (proposal: Proposal): Proposal {
        proposal.maxWidth = 4;
        return proposal;
    }
}