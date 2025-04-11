import { Component, signal } from '@angular/core';

//interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
    public arrayExperiences = signal<IExperiences[]>([
       {
        summary: {
           strong: 'Fullstack Developer',
           p: '2024',

        },
         text: ' Tecnologias usadas: React, Node.js, Express, MongoDB.<br><br>Freelancer de um projeto chamado Votó Válido, o projeto tem o intuito de ajudar os cidadãos a denunciar irregularidades na cidade de forma anônima e privada, contribuindo para a manutenção da ordem pública. O sistema utiliza um bot interativo que guia o usuário passo a passo no registro de denúncias, garantindo segurança e praticidade.',

       },


       
       
    ])
}
