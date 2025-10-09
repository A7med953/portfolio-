import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}
@Component({
  selector: 'app-experiece',
  imports: [CommonModule],
  templateUrl: './experiece.component.html',
  styleUrl: './experiece.component.css'
})
export class ExperieceComponent {
 experiences: Experience[] = [
    {
      title: 'Frontend Angular Developer Intern',
      company: 'United Integrated Solutions',
      period: '06/2024 – 10/2024 ',
      description:
        'Worked on building responsive Angular applications, implementing UI components, and improving user experience through clean and efficient code.',
      technologies: ['Angular','JavaScript', 'TypeScript', 'Bootstrap', 'HTML5', 'CSS3']
    },
    {
      title: 'Frontend Angular Developer Trainee',
      company: 'Digital Egypt Pioneers Initiative (DEPI)',
      period: '06/2025 – Present',
      description:
        'Developing scalable front-end components using Angular, applying routing, services, and data binding techniques to build dynamic web applications.',
      technologies: ['Angular 18','JavaScript', 'TypeScript', 'RxJS', 'Bootstrap','HTML5', 'CSS3',]
    },
    {
      title: 'Frontend Angular Developer Trainee',
      company: 'Information Technology Institute (ITI)',
      period: '07/2025 – 08/2025 ',
      description:
        'Gained hands-on experience in Angular fundamentals, component communication, and responsive design using Bootstrap.',
      technologies: ['JavaScript','JQuery','Sass', 'HTML5', 'CSS3', 'Bootstrap']
    }
  ];
}
