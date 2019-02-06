import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

export class ListagemComponent implements OnInit {
  title = 'Caelum Pic';
  listaFotos: FotoComponent[] = [];
  mensagem: string;

  constructor(private api: FotoService) {
    api.listar()
    .subscribe(fotosApi => {
      this.listaFotos = fotosApi;
      console.log(this.listaFotos);
    }, erro => {
      console.error('deu ruim: ', erro);
    });
  }

  ngOnInit() {
  }

  remover(foto) {
    this.api.deleta(foto)
    .subscribe(mensagemApi => {
      this.mensagem = mensagemApi.mensagem;
      this.listaFotos = this.listaFotos.filter(
        fotoDaLista => fotoDaLista._id !== foto._id
      );
      setTimeout(
        () => this.mensagem = ''
        , 2000
      );
    }, erro => {
      console.log('deu ruim: ', erro);
    });
  }

}
