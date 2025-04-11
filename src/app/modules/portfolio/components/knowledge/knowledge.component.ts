import { Component, signal } from '@angular/core';

//interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/Javascript.svg',
      alt: 'ícone de conhecimento Javascript'
    },

    {
      src: 'assets/icons/knowledge/nodeJs.svg',
      alt: 'ícone de conhecimento nodeJs'
    },

    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'ícone de conhecimento Angular'
    },

    {
      src: 'assets/icons/knowledge/dataBase.svg',
      alt: 'ícone de conhecimento banco de dados'
    },

    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'ícone de conhecimento sass'
    },
  ])
}
