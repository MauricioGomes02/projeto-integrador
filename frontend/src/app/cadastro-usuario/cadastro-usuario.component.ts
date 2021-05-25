import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../shared/services/usuario.service';
import {Usuario} from '../shared/models/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

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
              private usuarioService: UsuarioService) {
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
 /*   this.usuarioService.getUsuario(1).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
    });*/
  }
  onSubmit(): void {
    if (this.formulario.valid) {
      this.usuarioService.createUsuario(this.formulario.value)
        .subscribe((result) => {
          result.status === 201 ? this.resetForm() : console.log(result);
        }, (error => {
          console.log(error);
        }));
    }
  }
  resetForm(): void {
    this.formulario.reset();
  }
}
