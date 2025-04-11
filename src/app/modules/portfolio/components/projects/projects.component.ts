import { Component, inject, signal } from '@angular/core';

// interface
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<IProjects[]> ([
    {
      src: 'assets/img/projects/voto_completo.png',
      alt: '',
      title: 'Voto Válido',
      width: '100px',
      height:'50px',
      description:
      '<p>Explore meu Projeto clicando no Botão abaixo<p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://'
        },
      ],
    },

    {
      src: 'assets/img/projects/sejafit-icon.png',
      alt: '',
      title: 'SEJAFIT',
      width: '100px',
      height:'50px',
      description:
      '<p>Explore meu Projeto clicando no Botão abaixo<p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://carlosgmk.github.io/JavaScript-Landing-Page-Academia/'
        },
      ],
    },


    {
      src: 'assets/img/projects/veroshopIcon.png',
      alt: '',
      title: 'VEROSHOP',
      width: '100px',
      height:'50px',
      description:
      '<p>Explore meu Projeto clicando no Botão abaixo<p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://www.google.com/'
        },
      ],
    },
    
   
  ])

  public openDialog(data: IProjects){
     this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.Projects
     })
  }
}
