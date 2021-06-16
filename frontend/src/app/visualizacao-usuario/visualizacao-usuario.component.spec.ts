import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoUsuarioComponent } from './visualizacao-usuario.component';

describe('VisualizacaoUsuarioComponent', () => {
  let component: VisualizacaoUsuarioComponent;
  let fixture: ComponentFixture<VisualizacaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacaoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
