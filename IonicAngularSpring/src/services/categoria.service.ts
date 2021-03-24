import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CategoriaDTO } from "src/models/categoria.dto";
import { API_CONFIG } from "src/config/api.config";



@Injectable()
export class CategoriaService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<CategoriaDTO[]>  {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}