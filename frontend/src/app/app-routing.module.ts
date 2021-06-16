import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsultaUsuarioComponent} from './consulta-usuario/consulta-usuario.component';
import {CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';
import {EdicaoUsuarioComponent} from './edicao-usuario/edicao-usuario.component';
import {VisualizacaoUsuarioComponent} from './visualizacao-usuario/visualizacao-usuario.component';

const routes: Routes = [
  { path: 'consulta', component: ConsultaUsuarioComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'edicao/:id', component: EdicaoUsuarioComponent },
  { path: 'visualizacao/:id', component: VisualizacaoUsuarioComponent },
  { path: '', pathMatch: 'full', redirectTo: 'consulta' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
