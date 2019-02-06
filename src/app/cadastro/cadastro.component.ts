import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FotoService } from '../foto/foto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  // definindo o tipo como Object
  foto = new FotoComponent();
  mensagem;
  formulario: FormGroup;

  constructor(
    private fotoService: FotoService,
    private router: ActivatedRoute,
    private rota: Router,
    private builder: FormBuilder
    ) {
      this.formulario = builder.group({
        titulo: ['', Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])],
        url: ['', Validators.required],
        descricao: [''],
      });

      this.formulario.valueChanges.subscribe(
        valores => {
          this.foto = Object.assign(this.foto, valores);
        }
      );

      this.router.params
        .subscribe(
          parametros => {
            if (parametros.idFoto) {
              this.fotoService
                .obter(parametros.idFoto)
                .subscribe(fotoDaApi => {
                  this.foto = fotoDaApi;
                  this.formulario.patchValue(this.foto);
              });
            }
          }
        );
     }

  ngOnInit() {
  }

  salvar() {
    if (this.foto._id) {
      this.fotoService.alterar(this.foto)
        .subscribe(
          mensagemApi => {
            this.mensagem = mensagemApi.mensagem;
            this.foto = new FotoComponent();

            setTimeout(() => {
              this.rota.navigate(['']);
            }, 2000
            );
          }
        );
    } else {
      this.fotoService.salvar(this.foto)
    .subscribe(mensagemApi => {
      this.mensagem = mensagemApi.mensagem;
      this.foto = new FotoComponent();
      setTimeout(() => {
        this.rota.navigate(['']);
      }, 2000);
    });

    }

    }

    get titulo() {
    return this.formulario.get('titulo');
  }

  get url() {
    return this.formulario.get('url');
  }

}
