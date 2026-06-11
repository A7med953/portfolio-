import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projectsToShow = 3;

  projects = [
    {
      title: 'Menu Drinks',
      description:
        'A responsive and modern drinks menu showcasing a variety of beverages with appealing visuals and smooth user interactions. Built using Angular and Bootstrap for an elegant and dynamic user experience.',
      image: '/project/coffe.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
      liveUrl: 'https://coffee-sepia-mu.vercel.app/home',
      githubUrl: 'https://github.com/A7med953/coffee',
    },
    {
      title: 'HealthCarePlus',
      image: '/project/HealthCarePlus.png',
      description:
        'A role-based healthcare platform for patients, doctors, and pharmacists. The system manages patient medical history, supports record tracking, and improves coordination between healthcare providers for better clinical workflow.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
      liveUrl: 'https://team-depi-delta.vercel.app/',
      githubUrl: 'http://github.com/A7med953/team-depi-',
    },
    {
      title: 'Candle-store',
      image: '/project/Candle-store.png',
      description:
  'A modern e-commerce platform for showcasing and selling handmade candles. The application provides a smooth user experience with a responsive layout, product display system, and clean UI designed to enhance online shopping engagement.',
  technologies: [ 'JavaScript', 'HTML', 'CSS'],
  liveUrl: 'https://a7med953.github.io/Candle-store/',
  githubUrl: 'https://github.com/A7med953/Candle-store',
    },
    {
      title: 'Bondi',
      image: '/project/bondi.png',

description:
  'A modern personal portfolio website built to present projects, technical skills, and professional experience. It features a responsive layout, project showcase section, and clean UI to effectively demonstrate development capabilities.',
  technologies: [ 'JavaScript', 'HTML', 'CSS','Bootstrap'],
  liveUrl: 'https://a7med953.github.io/bondi/',
  githubUrl: 'https://github.com/A7med953/bondi',
    },
  ];

  showMoreProjects() {
    this.projectsToShow += 3;
  }
  showLessProjects() {
    this.projectsToShow = Math.max(3, this.projectsToShow - 3);
  }
}
