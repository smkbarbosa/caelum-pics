import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { HttpClientModule } from '@angular/common/http';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { roteamento } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemComponent } from './mensagem/mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpClientModule,
    PainelModule,
    roteamento,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
