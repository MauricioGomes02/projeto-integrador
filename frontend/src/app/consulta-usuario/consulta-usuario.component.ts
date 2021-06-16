import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../shared/services/usuario.service';
import {Usuario} from '../shared/models/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',
  styleUrls: ['./consulta-usuario.component.css']
})
export class ConsultaUsuarioComponent implements OnInit {

  usuario = {} as Usuario;
  usuarios = [] as Usuario[];
  constructor(private usuarioService: UsuarioService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
    /*this.usuarioService.createUsuario().subscribe((data) => {
      console.log(data);
    });*/
  }
  navegarEdicao(id: number): void {
    this.router.navigate(['/edicao', id]);
  }
  navegarVisualizacao(id: number): void {
    this.router.navigate(['/visualizacao', id]);
  }
  excluir(usuario: any): void{
    this.usuarioService.deleteUsuario(usuario)
      .subscribe((result) => {
        console.log(result);
        this.usuarioService.getUsuarios().subscribe((usuarios: Usuario[]) => {
          this.usuarios = usuarios;
        });
      }, (error => {
        console.log(error);
      }));
  }
}
