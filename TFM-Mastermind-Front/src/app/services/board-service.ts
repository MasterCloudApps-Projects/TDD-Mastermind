import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BusService } from "../common/bus";
import { IForm } from "../interfaces/IForm";

const PREFIX = `${environment.baseUrl}/film`;

/**
 * Servicio para recuperar catálogos, tanto "locales" como desde el servidor
 * 
 **/
 @Injectable({
    providedIn: 'root'
})
export class BoardService {
    constructor(
    ) {
    } 

    //Recupera todos los atributos de un cliente
    public getSecretcombination (): string[] {
        return ['red', 'green', 'blue', 'black'];
    }
}