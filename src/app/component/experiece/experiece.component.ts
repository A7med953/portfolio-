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
  styleUrl: './experiece.component.css',
})
export class ExperieceComponent {
  experiences: Experience[] = [
    {
      title: 'Angular Frontend Developer Trainee',
      company: 'Digital Egypt Pioneers Initiative (DEPI)',
      period: '06/2025 – 12/2025',
      description:
        '• Completed a 200+ hour training program in Angular, TypeScript, and modern frontend technologies.\n' +
        '• Built a fully functional Single Page Application (SPA) using Angular with modular architecture and routing.\n' +
        '• Improved code maintainability by implementing reusable components and clean code practices.\n' +
        '• Collaborated in Agile sprints to deliver project features within deadlines.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frontend Web Developer Trainee',
      company: 'Information Technology Institute (ITI)',
      period: '07/2025 – 08/2025',
      description:
        '• Completed a 120-hour intensive training in frontend development.\n' +
        '• Developed 5+ responsive landing pages using HTML, CSS, and JavaScript.\n' +
        '• Improved page performance by ~15% through CSS and JavaScript optimization.\n' +
        '• Ensured cross-browser compatibility across multiple devices and screen sizes.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Sass'],
    },
    {
      title: 'Frontend Angular Developer Intern',
      company: 'United Integrated Solutions (UIS)',
      period: '06/2024 – 10/2024',
      description:
        '• Developed 4+ Angular components using routing, data binding, and modular architecture.\n' +
        '• Built 2 responsive web interfaces using HTML, CSS, Bootstrap, and JavaScript.\n' +
        '• Reduced UI inconsistencies by ~30% by applying Angular best practices.\n' +
        '• Enhanced user experience through responsive, user-friendly interface design.',
      technologies: ['Angular', 'JavaScript', 'TypeScript', 'Bootstrap', 'HTML5', 'CSS3'],
    },
  ];
}