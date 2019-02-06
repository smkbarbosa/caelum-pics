import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FotoComponent } from './foto.component';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' }) // permite que o serviço seja chamado de qualquer lugar sem precisar iniciar nova instancia
export class FotoService {

    constructor(private api: HttpClient) {}

    private cabecalho = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    private url = 'http://localhost:3000/v1/fotos/';

    listar() {
        return this.api.get<FotoComponent[]>(this.url);
    }

    salvar(fotos) {
        return this.api.post(
            this.url, fotos,
            this.cabecalho
            )
            .pipe(
                map(
                    () => new MensagemServico(`Foto ${fotos.titulo} cadastrada com sucesso`)
                )
            )
            ;
    }

    deleta(fotos) {
        return this.api.delete(this.url + fotos._id)
            .pipe(map( // permite que o dev altere a resposta q vem do servidor
                    () => new MensagemServico(`Foto ${fotos.titulo } removida com sucesso`)
                )
            );
    }

    obter(idFoto: string): Observable<FotoComponent> {
        return this.api.get<FotoComponent>(this.url + idFoto);
    }

    alterar(fotos) {
        return this.api.put(this.url + fotos._id, fotos, this.cabecalho)
        .pipe(map(
            () => new MensagemServico(`Foto ${fotos.titulo} alterada com sucesso`)
            )
        );
    }

}

export class MensagemServico {
    constructor(readonly mensagem: string) {}
}
