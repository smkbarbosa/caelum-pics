import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-foto',
    templateUrl: 'foto.component.html'
})

export class FotoComponent {
    titulo = '';
    @Input()
    url = '';
    @Input()
    descricao = '';
    _id = '';
    id = '';
}
