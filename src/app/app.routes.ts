import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const rotas: Routes = [
    {
        path: '',
        component: ListagemComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'editar/:idFoto',
        component: CadastroComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];

export const roteamento = RouterModule.forRoot(rotas);
