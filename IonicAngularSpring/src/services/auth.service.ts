import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "src/config/api.config";
import { CredenciaisDTO } from "src/models/credenciais.dto";

@Injectable()
export class AuthService {

    constructor(public http: HttpClient) {

    }

    authenticate(credenciais : CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            credenciais,
            {
                observe: 'response',
                responseType: 'text'
            })
    }
}