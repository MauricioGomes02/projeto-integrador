import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Usuario} from "../shared/models/usuario";
import {UsuarioService} from "../shared/services/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-visualizacao-usuario',
  templateUrl: './visualizacao-usuario.component.html',
  styleUrls: ['./visualizacao-usuario.component.css']
})
export class VisualizacaoUsuarioComponent implements OnInit {

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
      nome: [{value: '', disabled: true}, Validators.required],
      registroNis: [{value: '', disabled: true}, Validators.required],
      cpf: [{value: '', disabled: true}, Validators.required],
      rg: [{value: '', disabled: true}, Validators.required],
      rendaFamiliar: [{value: '', disabled: true}, Validators.required],
      profissao: [{value: '', disabled: true}, Validators.required],
      ocupacao: [{value: '', disabled: true}, Validators.required],
      dtNascimento: [{value: '', disabled: true}, Validators.required],
      atendidoProgramaSocial: [{value: '', disabled: true}, Validators.required],
      programaSocial: [{value: '', disabled: true}, Validators.required],
      observacao: [{value: '', disabled: true}, Validators.required],
      endereco: [{value: '', disabled: true}, Validators.required],
      telefone: [{value: '', disabled: true}, Validators.required],
      totalPessoas: [{value: '', disabled: true}, Validators.required],
      necessidadesEspeciais: [{value: '', disabled: true}, Validators.required],
      nomesIdades: [{value: '', disabled: true}, Validators.required],
    });
  }

  ngOnInit(): void {
       this.usuarioService.getUsuario(this.activateRoute.snapshot.params.id).subscribe((usuario: Usuario) => {
         // @ts-ignore
         delete usuario.id;
         this.formulario.setValue(usuario);
       });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
