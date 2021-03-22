import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CategoriaDTO } from "src/models/categoria.dto";



@Injectable()
export class CategoriaService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<CategoriaDTO[]>  {
        return this.http.get<CategoriaDTO[]>("http://localhost:8080/categorias");
    }
}