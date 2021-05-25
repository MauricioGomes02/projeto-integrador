import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../shared/services/usuario.service';
import {Usuario} from '../shared/models/usuario';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edicao-usuario',
  templateUrl: './edicao-usuario.component.html',
  styleUrls: ['./edicao-usuario.component.css']
})
export class EdicaoUsuarioComponent implements OnInit {

  lstOcupacoes = [
    'TRABALHANDO',
    'DESEMPREGADO(A)',
    'INFORMAL',
    'APOSENTADO/PENSIONISTA',
    'DO LAR',
    'SOMENTE C/BOLSA FAMÍLIA'
  ];
  formulario: FormGroup;
  usuario = {} as Usuario;
  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      registroNis: [null, Validators.required],
      cpf: [null, Validators.required],
      rg: [null, Validators.required],
      rendaFamiliar: [null, Validators.required],
      profissao: [null, Validators.required],
      ocupacao: [null, Validators.required],
      dtNascimento: [null, Validators.required],
      atendidoProgramaSocial: [null, Validators.required],
      programaSocial: [null, Validators.required],
      observacao: [null, Validators.required],
      endereco: [null, Validators.required],
      telefone: [null, Validators.required],
      totalPessoas: [null, Validators.required],
      necessidadesEspeciais: [null, Validators.required],
      nomesIdades: [null, Validators.required],
    });
  }

  ngOnInit(): void {
       this.usuarioService.getUsuario(this.activateRoute.snapshot.params.id).subscribe((usuario: Usuario) => {
         // @ts-ignore
         delete usuario.id;
         this.formulario.setValue(usuario);
       });
  }
  onSubmit(): void {
    if (this.formulario.valid) {
      const usuarioSubmited = this.formulario.value;
      usuarioSubmited.id = this.activateRoute.snapshot.params.id;
      this.usuarioService.updateUsuario(usuarioSubmited)
        .subscribe((result) => {
          this.cancel();
        }, (error => {
          console.log(error);
        }));
    }
  }
  cancel(): void {
    this.router.navigate(['/']);
  }
}
