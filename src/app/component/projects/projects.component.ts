import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Menu Drinks',
      description:
        'A responsive and modern drinks menu showcasing a variety of beverages with appealing visuals and smooth user interactions. Built using Angular and Bootstrap for an elegant and dynamic user experience.',

      image: '/project/1.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio',
      description:
        'A personal portfolio website showcasing projects, skills, and experience with a modern and responsive design. Built with Angular and Bootstrap to ensure smooth navigation and performance.',
      image: '/project/2.png',

      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Menu Restaurant',
      description:
        'An interactive restaurant menu website showcasing dishes with images, prices, and categories. Built with Angular and Bootstrap for a smooth, responsive user experience.',

      image: '/project/3.png',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];
}
